export default defineEventHandler(async (event) => {
    const id = event.context.params.id;
    const taskId: number = Number(event.context.params.taskId);
    console.log(`add points to task ${taskId} for ${id}`);

    const body = await readBody(event)
    console.log(`payload ${JSON.stringify(body)}`);

    let tasksData = await useStorage().getItem(`redis:tasks:${id}`)

    // Check user data
    if (tasksData == null || tasksData == undefined) {
        return respondWithNotFound(event.res, "user", id)
    }


    // Chech task exists
    let taskExist = false;
    tasksData.tasks.forEach(t => {
        if (t.id === taskId) {
            taskExist = true;
            return;
        }
    });
    if (!taskExist) {
        return respondWithNotFound(event.res, "task", taskId)
    }


    let added = false;
    tasksData.score.forEach(s => {
        if (s.taskId === taskId) {
            s.points = Number(body.points);
            added = true;
            return;
        }
    });

    if (!added) {
        tasksData.score.push({
            taskId: taskId,
            points: Number(body.points)
        })
    }

    tasksData.totalScore += body.points;
    console.log(`tasks ${JSON.stringify(tasksData)}`);

    await useStorage().setItem(`redis:tasks:${id}`, tasksData)
    return "OK"
})

function respondWithNotFound(res, resName: string, id: number): any {
    let msg = `${resName} with id ${id} is not found`;
    console.error(msg);
    res.statusCode = 404;
    return {
        msg: msg,
        errorCode: res.statusCode
    }
}