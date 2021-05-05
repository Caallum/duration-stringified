const createBar = (total, current, size = 40, line_1 = '=', slider = '>', line_2 = ' ') => {
  if (!total) throw new Error('Total value is either not provided or invalid');
  if (!current && current !== 0) throw new Error('Current value is either not provided or invalid');
  if (isNaN(total)) throw new Error('Total value is not an integer');
  if (isNaN(current)) throw new Error('Current value is not an integer');
  if (isNaN(size)) throw new Error('Size is not an integer');
  if (current > total) {
    const bar = line_1.repeat(size + 2);
    const percentage = (current / total) * 100;
    return [bar, percentage];
  } else {
    const percentage = current / total;
    const progress = Math.round((size * percentage));
    const emptyProgress = size - progress;
    const progressText = line_1.repeat(progress).replace(/.$/, slider);
    const emptyProgressText = line_2.repeat(emptyProgress);
    const bar = progressText + emptyProgressText;
    const calculated = percentage * 100;
    return [bar, calculated];
  }
};

module.exports.createBar = createBar;
