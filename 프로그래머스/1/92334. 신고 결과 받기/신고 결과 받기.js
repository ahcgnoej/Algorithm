function solution(id_list, report, k) {
  const reports = {};
  const reportCount = {};
  const result = {}; 

  id_list.forEach(id => {
    reports[id] = new Set(); 
    reportCount[id] = 0;
    result[id] = 0;
  });

  report.forEach(entry => {
    const [from, to] = entry.split(' ');
    reports[from].add(to);
  });

  // 누가 몇 번 신고당했는지 카운트
  for (const reporter in reports) {
    reports[reporter].forEach(target => {
      reportCount[target] += 1;
    });
  }

  for (const reporter in reports) {
    reports[reporter].forEach(target => {
      if (reportCount[target] >= k) {
        result[reporter] += 1;
      }
    });
  }

  return id_list.map(id => result[id]);
}
