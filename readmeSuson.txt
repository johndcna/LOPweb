for quiz parameters

ng-click=goToQuiz(id,loname,losubject,username,userid);

Submit quiz result mao ni ang json format so if wala kay sure unsay parameter kay ikaw bahala pwede null

{
    "id": null,
    "lo_id": null,
    "lo_name": "",
    "lo_subject": null,
    "score": 0,
    "totalScore": 0,
    "date_submitted": null,
    "time_started": null,
    "time_finished": null,
    "username": "",
    "user_id": 0,
    "quizResults": null,
    "errorList": []
}


for lori parameters

ng-click=goToLORI(id,learningObjectId,subject,loris,reviewId);

Submit LORI result mao ni format sa lori so if dli ka kabaw unsay ibutang sa parameter like:loris?wtf! and reviewId?! wtf1? unsay dapat ibutang ana? ikaw bahala if way sure e null nalang

{
    "id": null,
    "evaluation": [0,5,3,1,2,3,4],
    "learningObjectId": null,
    "subject": null,
    "errorList": [],
    "loris": null,
    "reviewId": null
}

P.S.
na program na nako ang pag submit sa quiz ug lori result so YOLO nalang kay dili ko ka test sa informatron pero ang json format kay ok na kuwang nalang parameters na dapat e send didto