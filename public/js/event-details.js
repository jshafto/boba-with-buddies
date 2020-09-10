const getEvent = async (id) => {
    const res = await fetch("/api/events/" + id);
    const data = await res.json();
    return data;
}
