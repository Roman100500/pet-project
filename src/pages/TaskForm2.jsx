import { useParams } from 'react-router-dom';

export function TaskForm2() {
  const { id } = useParams();
  return (
    <>
      <h2>TaskForm: {id}</h2>
    </>
  );
}
