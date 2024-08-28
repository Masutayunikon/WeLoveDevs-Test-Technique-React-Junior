import { Job } from "@/entities/job";

interface Props {
  items: Job[]; // Expecting items to be an array of Job objects
}

export default function Example(props: Props) {
  const { items } = props;

  // Ensure items is an array and handle cases where it might be undefined or not an array
  if (!Array.isArray(items)) {
    console.error('Expected items to be an array, but received:', items);
    return <p>No jobs available.</p>;
  }

  return (
    <ul role="list" className="space-y-3">
      {items.length > 0 ? (
        items.map((item) => (
          <li key={item.id} className="overflow-hidden rounded-md bg-white px-6 py-4 shadow">
            <h2 className="text-lg font-semibold">{item.title}</h2>
            <p className="text-sm text-gray-600">{item.descriptionPreview}</p>
          </li>
        ))
      ) : (
        <p>No jobs available.</p>
      )}
    </ul>
  );
}
