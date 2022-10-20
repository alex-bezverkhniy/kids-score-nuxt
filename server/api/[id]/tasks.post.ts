export default defineEventHandler(async (event) => {
    const id = event.context.params.id;
    console.log(`create all tasks for ${id}`);

    const body = await readBody(event)
    await useStorage().setItem(`redis:tasks:${id}`, body)
    return "OK"
})