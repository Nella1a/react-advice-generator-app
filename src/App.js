import Layout from './components/layout';
import Quotes from './components/Quotes';

function App() {
  return (
    <Layout>
      <div className="flex justify-center items-center  min-h-screen bg-dark-blue">
        <Quotes />
      </div>
    </Layout>
  );
}

export default App;
