export default defineEventHandler(async (event) => {
    const id = event.context.params.id;
    console.log(`get all score for ${id}`);

    const data = await useStorage().getItem(`redis:score:${id}`)
    event.res.setHeader("Content-Type", "application/json")
    // console.debug("score", data)
    return data
})