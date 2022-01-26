export const listGenerator = (start: number, end: number): number[] => {
    const answer = [];
    for (let i = start; i <= end; i++) {
      answer.push(i);
    }
    return answer;
  };
export const MonthLists = [
    "มกราคม",
    "กุมพาพันธ์",
    "มีนาคม",
    "เมษายน",
    "พฤษภาคม",
    "มิถุนายน",
    "กรกฏาคม",
    "สิงหาคม",
    "กันยายน",
    "ตุลาคม",
    "พฤศจิกายน",
    "ธันวาคม",
  ];

export const Yearlists = listGenerator(1900, 2022);
export const maxDateObject: { [key: string]: number } = {
  มกราคม: 31,
  กุมพาพันธ์: 29,
  มีนาคม: 31,
  เมษายน: 30,
  พฤษภาคม: 31,
  มิถุนายน: 30,
  กรกฏาคม: 31,
  สิงหาคม: 31,
  กันยายน: 30,
  ตุลาคม: 31,
  พฤศจิกายน: 30,
  ธันวาคม: 31,
};