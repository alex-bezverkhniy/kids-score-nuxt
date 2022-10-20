export default defineEventHandler(async (event) => {
    const id = event.context.params.id;
    console.log(`create all goals for ${id}`);

    const body = await readBody(event)
    await useStorage().setItem(`redis:goals:${id}`, body)
    return "OK"
})