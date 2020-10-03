using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using DojoNetCore.Modelo;
using Microsoft.AspNetCore.Mvc;

namespace DojoNetCore.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UsuarioController : ControllerBase 
    {   
        FirebaseAccount Instacia =FirebaseAccount.Instancia;
        [HttpGet]
        public async Task<List<Usuario>> Get()
        {
           return await Instacia.GetUser();
        }
        [HttpPost]
        public async Task<String> Post(Usuario user)
        {
            return await Instacia.AddUser(user);
        }
        [HttpDelete]
        public async Task<String> Delete([FromQuery]String id)
        {
            return await Instacia.DeleteUser(id);
        }
        
    }
}