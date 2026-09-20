# CampusEats Task Tracker

A small team repository used by the three CampusEats developers to track their
work and practise a professional Git workflow:

**branch → commit → pull request → review → merge**, with GitHub Issues for
planning and GitHub Actions checking every change.

## Structure

```
campuseats-task-tracker/
  README.md              # project overview
  .gitignore             # ignored files (node_modules, bin, obj)
  src/
    tasks.js             # a small sample file
  .github/
    workflows/
      ci.yml             # the CI pipeline
```

## Workflow (GitHub Flow)

- `main` is always deployable — nobody commits to it directly.
- Every change lives on a short-lived branch: `feature/*`, `fix/*`, `chore/*`.
- Changes reach `main` only through a reviewed pull request with passing checks.
- Commit messages follow [Conventional Commits](https://www.conventionalcommits.org/):
  `feat:`, `fix:`, `chore:`, `docs:`.

## Running

```
node src/tasks.js
```
