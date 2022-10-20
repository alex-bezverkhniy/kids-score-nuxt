export default defineEventHandler(async (event) => {
    const id = event.context.params.id;
    console.log(`create all score for ${id}`);

    const body = await readBody(event)
    await useStorage().setItem(`redis:score:${id}`, body)
    return "OK"
})