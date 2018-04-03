const { danger, warn, fail } = require("danger");

// No PR is too small to include a description of why you made a change
const isPatchVersion = danger.github.issue.labels.includes("patch");
const isMinorVersion = danger.github.issue.labels.includes("minor");
const isMajorVersion = danger.github.issue.labels.includes("major");

if (!(isPatchVersion && isMinorVersion && isMajorVersion)) {
  fail("no semver in labels.");
}

const isPatchInTitle = danger.github.pr.title.includes("patch:");
const isMinorInTitle = danger.github.pr.title.includes("minor:");
const isMajorInTitle = danger.github.pr.title.includes("major:");
const title = danger.github.pr.title;

if (!(isPatchInTitle && isMinorInTitle && isMajorInTitle)) {
  fail("no semver in title.");
}
