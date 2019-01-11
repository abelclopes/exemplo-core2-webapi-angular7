namespace domain
{
    public class Autor: EntidadeBase
    {
        public string Nome { get; set; }
        public Livro Livros { get; set; }
    }
}