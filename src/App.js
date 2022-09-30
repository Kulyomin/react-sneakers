import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

function App() {
   return (
      <div className="wrapper clear">
         <Drawer />
         <Header />
         <div className="content p-40">
            <div className="content_title d-flex justify-between align-center mb-40">
               <h1>Все кроссовки</h1>
               <div className="search_sneakers d-flex align-center pr-10 pl-10">
                  <img className="mr-10" width={15} height={15} src="/image/search.svg" alt="search_icon" />
                  <input placeholder="Поиск..." type="text" />
               </div>
            </div>

            <div className="d-flex">
               <Card id="1" model={'Мужские Кроссовки Nike Blazer Mid Suede'} price={'12 999'} />
               <Card model={'Мужские Кроссовки Nike Blazer Mid Suede'} price={'10 999'} />
               <Card model={'Мужские Кроссовки Nike Blazer Mid Suede'} price={'8 999'} />
               <Card model={'Мужские Кроссовки Nike Blazer Mid Suede'} price={'14 999'} />
            </div>
         </div>

      </div>
   );
}

export default App;
