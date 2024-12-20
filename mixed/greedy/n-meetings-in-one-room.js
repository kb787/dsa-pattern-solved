class Solution {
  maxMeetings(start, end) {
    const meetings = [];
    for (let i = 0; i < start.length; i++) {
      meetings.push({ start: start[i], end: end[i] });
    }

    meetings.sort((a, b) => a.end - b.end);

    let meetingCount = 1;
    let lastEnd = meetings[0].end;

    for (let i = 1; i < meetings.length; i++) {
      if (meetings[i].start > lastEnd) {
        meetingCount++;
        lastEnd = meetings[i].end;
      }
    }

    return meetingCount;
  }
}
