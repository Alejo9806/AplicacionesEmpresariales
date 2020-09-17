import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  id: String;
  public producto;
  public seller;
  public imagenes: Array<any>=[]

  constructor(private activeRoute:ActivatedRoute, private router: Router,private productoService:ProductoService) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params =>{
       this.id = params ['id'];
       this.productoService.getProductoId(this.id).subscribe((resp:any) =>{ 
        this.producto = resp;
        this.imagenes = resp.pictures;
        console.log(this.imagenes);
        
        this.productoService.getSellerId(this.producto.seller_id).subscribe((resp:any)=>{
          this.seller=resp;
        })
    })

    })
  
  }
}

