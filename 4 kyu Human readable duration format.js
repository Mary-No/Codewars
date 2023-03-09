function formatPlural(word, count) {
  if (count > 1) {
    return `${word}s`;
  }
  return word;
}

function timeStr(seconds, word, base) {
  let temp = Math.floor(seconds / base);
  if (temp !== 0) {
    return formatPlural(`${temp} ${word}`, temp);
  }

  return "";
}

function formatDuration(seconds) {
  if (seconds === 0) {
    return "now";
  }

  let result = [];

  if (seconds >= 31536000) {
    result.push(timeStr(seconds, "year", 31536000));
    seconds = seconds % 31536000;
  }

  if (seconds >= 86400) {
    result.push(timeStr(seconds, "day", 86400));
    seconds = seconds % 86400;
  }

  if (seconds >= 3600) {
    result.push(timeStr(seconds, "hour", 3600));
    seconds = seconds % 3600;
  }

  if (seconds >= 60) {
    result.push(timeStr(seconds, "minute", 60));
    seconds = seconds % 60;
  }

  if (seconds < 60 && seconds > 0) {
    result.push(formatPlural(`${seconds} second`, seconds));
  }

  result = result.join(", ");

  n = result.lastIndexOf(",");
  if (n !== -1) {
    result = result.substring(0, n) + " and" + result.substring(n + 1);
  }

  return result;
}
