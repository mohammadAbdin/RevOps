import ProjectType from "../Types/ProjectType";

/**
 * @param left
 * @param right
 * @returns
 */
function merge(left: ProjectType[], right: ProjectType[]): ProjectType[] {
  const result: ProjectType[] = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if ((left[leftIndex].views || 0) >= (right[rightIndex].views || 0)) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

/**
 * @param projects -
 * @returns A sorted array of projects.
 */
export function mergeSortProjects(projects: ProjectType[]): ProjectType[] {
  if (projects.length <= 1) {
    return projects;
  }

  const middle = Math.floor(projects.length / 2);
  const left = projects.slice(0, middle);
  const right = projects.slice(middle);

  return merge(mergeSortProjects(left), mergeSortProjects(right));
}
