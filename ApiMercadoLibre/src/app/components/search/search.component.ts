import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';
import {ActivatedRoute,Router} from '@angular/router'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})


export class SearchComponent implements OnInit {
  search:String;
  public productos: Array<any> = [];
  pagination = 1; 
  number=0;

  next(){
    this.pagination= this.pagination+50;
    console.log(this.pagination);
    this.number= this.number+1;
    this.activeRoute.params.subscribe(params =>{
      
      this.search = params ['search'];
      this.productoService.getProducto(this.search,this.pagination).subscribe((resp:any) =>{ 
         
        this.productos = resp.results;
        console.log(this.productos)
      
    })
   })
    
  }

  previous(){
    if(this.pagination==0){
      this.pagination=0 ;
    }else{
      this.pagination= this.pagination-50;
      this.number= this.number-1;
    }
    console.log(this.pagination);
    this.activeRoute.params.subscribe(params =>{
      
      this.search = params ['search'];
      this.productoService.getProducto(this.search,this.pagination).subscribe((resp:any) =>{ 
         
        this.productos = resp.results;
        console.log(this.productos)
      
    })
   })
    
  }

  constructor(private activeRoute:ActivatedRoute,private productoService:ProductoService, private router: Router) { }
  
  

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params =>{
      
      this.search = params ['search'];
      this.productoService.getProducto(this.search,this.pagination).subscribe((resp:any) =>{ 
         
        this.productos = resp.results;
        console.log(this.productos)
      
    })
   })
    
  }
  selecetedProduc(id: String){
    this.router.navigate(['/producto',id]);
    console.log(id);
  }

}
