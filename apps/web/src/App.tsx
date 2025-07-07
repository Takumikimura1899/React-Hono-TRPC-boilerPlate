import { trpc } from './lib/trpc';

function App() {
  const { data, isLoading, error } = trpc.getPosts.useQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className='p-8'>
      <h1 className='text-2xl font-bold mb-4'>Posts</h1>
      <ul>
        {data?.map((post) => (
          <li key={post.id} className='border-b py-2'>
            <h2 className='text-xl font-semibold'>{post.title}</h2>
            <p className='text-gray-600'>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
