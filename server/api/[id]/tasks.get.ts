export default defineEventHandler(async (event) => {
    const id = event.context.params.id;
    console.log(`get all tasks for ${id}`);

    const data = await useStorage().getItem(`redis:tasks:${id}`)
    event.res.setHeader("Content-Type", "application/json")
    console.debug("tasks", data)
    return data
})