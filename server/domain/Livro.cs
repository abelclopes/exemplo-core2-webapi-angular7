using System;

namespace domain
{
    public class Livro: EntidadeBase
    {
        public string Titulo { get; set; }
        public string Resumo { get; set; }
        public DateTime? DatePublish { get; set; }

        public virtual Categoria Categoria { get; set; }

        public Autor Autor { get; set; }
    }
}