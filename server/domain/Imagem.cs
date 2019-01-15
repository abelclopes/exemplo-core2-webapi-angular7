using System;

namespace domain
{
    public class Imagem: EntidadeBase
    {
        public byte[] imagem { get; set; }
        public DateTime? DatePublish { get; set; }

        public virtual Livro Livro { get; set; }

    }
}