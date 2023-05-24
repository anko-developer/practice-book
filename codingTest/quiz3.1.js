function solution(id_list, report, k) {
  const reports = [...new Set(report)].map(value => value.split(' '));
  const reportCount = new Map();
  reports.map(value => {
    reportCount.set(value[1], reportCount.get(value[1]) + 1 || 1);
  });

  const reportComplate = new Map();
  reports.map(value => {
    if (reportCount.get(value[1]) >= k) {
      reportComplate.set(value[0], reportComplate.get(value[0]) + 1 || 1);
    }
  }); 

  const result = id_list.map(value => reportComplate.get(value) || 0);
  return result;
}

solution(["muzi", "frodo", "apeach", "neo"], ["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"], 2);
solution(["con", "ryan"], ["ryan con", "ryan con", "ryan con", "ryan con"], 3);
