export const loadUser = async () => {
    try {
        const res = await axios.get("/api/user");
        // console.log(res.data);
        return res.data;
    } catch (err) {
        console.log(err.message);
    }
};
