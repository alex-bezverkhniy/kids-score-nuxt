export default defineEventHandler(async (event) => {
    const id = event.context.params.id;
    console.log(`get all goals for ${id}`);

    const data = await useStorage().getItem(`redis:goals:${id}`)
    event.res.setHeader("Content-Type", "application/json")
    // console.debug("goals", data)
    return data
})