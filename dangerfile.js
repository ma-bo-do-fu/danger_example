const { danger, warn, fail } = require("danger");

// No PR is too small to include a description of why you made a change
const isPatchVersion = danger.github.issue.labels.includes("patch");
const isMinorVersion = danger.github.issue.labels.includes("minor");
const isMajorVersion = danger.github.issue.labels.includes("major");

if (!(isPatchVersion && isMinorVersion && isMajorVersion)) {
  fail("no semver in labels.");
}
