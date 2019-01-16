using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Controllers;
using domain;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ImagensController : BaseController
    {
        public ImagensController(
            //IContext context, 
            IMemoryCache memoryCache) : base(
                //context, 
                memoryCache)
        { }

        // GET api/values
        [HttpGet]
        public List<Livro> Get()
        {
            return this.RetornaLivros();
        }

        private List<Livro> RetornaLivros()
        {

            return MemoryCache.GetOrCreate("livros", entry =>
            {
                entry.AbsoluteExpiration = DateTime.UtcNow.AddDays(1);
                List<Livro> livros = new List<Livro>();
                for (int i = 0; i < 5; i++)
                {
                    livros.Add(new Livro() { Id = Guid.NewGuid(), Titulo = $"Teste{i}", Resumo = "Pariatur mollit occaecat aliquip tempor pariatur laborum cupidatat commodo veniam eiusmod tempor veniam magna." });
                    i++;
                }
                return livros;
            });

        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<string> Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public ActionResult<Imagem> Post([FromBody] Imagem value)
        {
            value.Id = Guid.NewGuid();
            return Ok(value);
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
