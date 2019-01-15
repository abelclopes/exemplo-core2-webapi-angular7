using System;

namespace domain
{
    public class Imagem: EntidadeBase
    {
        public byte[] ImagemByte { get; set; }
        public string ImagemBase64 { get; set; }
        public DateTime? DatePublish { get; set; }

        public virtual Livro Livro { get; set; }

    }
}