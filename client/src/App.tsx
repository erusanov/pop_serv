import { observer } from 'mobx-react-lite';
import { counterStore } from './store';

const App = observer(() => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">
          React + MobX + Tailwind
        </h1>
        <p className="text-xl mb-4">Count: {counterStore.count}</p>
        <div className="space-x-4">
          <button
            onClick={() => counterStore.decrement()}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Decrement
          </button>
          <button
            onClick={() => counterStore.increment()}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Increment
          </button>
        </div>
      </div>
    </div>
  );
});

export default App;
