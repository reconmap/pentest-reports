const fetcher = (url) => fetch(url).then((r) => r.json());

export default fetcher;
