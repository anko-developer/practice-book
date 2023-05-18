// function report(id_list, report, k) {
//   // 값을 담고 있을 객체 만들어주기
//   const reportInfo = id_list.map((value) => {
//     return {
//       id: value,
//       reportCompleteCount: 0,
//       reportCount: 0,
//       reportId: [],
//     };
//   });

//   // 유저가 신고한 값 넣어주기
//   report.forEach((value) => {
//     const reportTarget = value.split(' ');
    
//     reportInfo.forEach(info => {
//       info.id === reportTarget[0] ? info.reportId.push(reportTarget[1]) : '';
//     });
//   });

//   // 유저가 신고한 놈 카운트 먹이기
//   reportInfo.forEach(value => {
//     const reportList = value.reportId;

//     reportList.forEach(item => {
//       reportInfo.forEach(value => {
//         if (value.id === item) ++value.reportCount;
//       });
//     }); 
//   });

//   reportInfo.forEach(parentValue => {
//     const reportList = parentValue.reportId;

//     reportList.forEach(item => {
//       reportInfo.forEach(value => {
//         if (value.id === item && value.reportCount >= k) ++parentValue.reportCompleteCount;
//       });
//     }); 
//   });
  
//   const result = reportInfo.map(value => value.reportCompleteCount);
  
//   return result;
// }

// const userList = ["muzi", "frodo", "apeach", "neo"];
// const reportUserList = [
//   "muzi frodo",
//   "apeach frodo",
//   "frodo neo",
//   "muzi neo",
//   "apeach muzi"
// ];

// report(userList, reportUserList, 2);



function solution(id_list, report, k) {
  // 값을 담고 있을 객체 만들어주기
  const reportInfo = id_list.map((value) => {
    return {
      id: value,
      reportCompleteCount: 0,
      reportCount: 0,
      reportId: [],
    };
  });

  // 유저가 신고한 값 넣어주기
  report.forEach((value) => {
    const reportTarget = value.split(' ');
    
    reportInfo.forEach(info => {
      info.id === reportTarget[0] ? info.reportId.push(reportTarget[1]) : '';
      // if (info.id === reportTarget[0]) {
      //   info.reportId.push(reportTarget[1]);
      // }
    });
  });

  // 유저가 신고한 놈 카운트 먹이기
  reportInfo.forEach(value => {
    const reportList = new Set([...value.reportId]);
    // console.log(reportList);

    reportList.forEach(item => {
      reportInfo.forEach(value => {
        if (value.id === item) ++value.reportCount;
      });
    }); 
  });

  reportInfo.forEach(parentValue => {
    const reportList = parentValue.reportId;

    reportList.forEach(item => {
      reportInfo.forEach(value => {
        if (value.id === item && value.reportCount >= k) ++parentValue.reportCompleteCount;
      });
    }); 
  });
  
  const result = reportInfo.map(value => value.reportCompleteCount);
  
  return result;
}

solution(["muzi", "frodo", "apeach", "neo"], ["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"], 2);

solution(["con", "ryan"], ["ryan con", "ryan con", "ryan con", "ryan con"], 3);