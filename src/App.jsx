export function App() {
  return (
    <>
      <header className="mt-4">
        <div className="bg-white flex justify-between">
          <img className="ml-6 h-13 cursor-pointer" src="./src/assets/controller.svg" alt="Icone controle" />
          <img className="h-13 cursor-pointer" src="./src/assets/Dark-logo.jpg" alt="Logo agroView" />
          <img className="mr-6 h-13 cursor-pointer" src="./src/assets/controller.svg" alt="Icone usuario" />
        </div>
        <div className="bg-dark-green py-2 mt-2">
          <ul className="flex justify-between text-white mx-6">
            <li className="cursor-pointer">Instruções</li>
            <li className="cursor-pointer">Loja</li>
            <li className="cursor-pointer">Quem Somos</li>
            <li className="cursor-pointer">Referências</li>
          </ul>
        </div>
      </header>
    </>
  )
}