// bugSolution.js
import { useRouter } from 'next/router';

export async function getStaticProps({ locale }) {
  // Fetch data based on locale
  const data = await fetchData(locale); // Replace fetchData with your actual data fetching logic
  return {
    props: { data },
  };
}

function fetchData(locale) {
  // Replace with actual data fetching logic that changes based on locale
  if (locale === 'en') {
    return { message: 'Hello in English' };
  } else if (locale === 'es') {
    return { message: 'Hola en Español' };
  } else {
    return { message: 'Default message' };
  }
}

export default function MyComponent({ data }) {
  const router = useRouter();
  const { locale } = router;

  return (
    <div>
      <h1>Locale: {locale}</h1>
      <p>{data.message}</p>
    </div>
  );
}
