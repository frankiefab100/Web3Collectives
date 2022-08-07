# Contribution Guidelines

Below are guidelines to help you make contributions to this project.
Please ensure your interactions is inline with our [CODE of CONDUCT](https://github.com/frankiefab100//master/CODE_OF_CONDUCT.md).

## Getting Started

### Prerequisites

- Git or any equivalent Version Control System
- Code Editor (e.g VsCode, Sublime Text, Atom)
- Basic knowledge of the Command Line Interface (CLI)

### Helpful resources

 > If you have no experience in Open Source contribution and the use of Git/Github, check these resources

 - [**GitHub For Beginners**](http://readwrite.com/2013/09/30/understanding-github-a-journey-for-beginners-part-1/) 
 - [**Basic Git WorkFlow**](https://guides.github.com/introduction/flow/index.html)

### Steps

Before installation, please make sure you have already installed following tools:

- [NodeJs](https://nodejs.org/en/download/)
- [Git](https://git-scm.com/downloads)

Then, follow the guidelines below for a successful contribution

**1.**  Fork [this](https://github.com/frankiefab100/Web3Collectives.git) repository.

**2.**  Clone your forked copy of the project.

```BASH
git clone  https://github.com/<your_user_name>/Web3Collectives.git
```

**3.** Go to the project directory.

```BASH
cd Web3Collectives
```

**4.** Add a reference(remote) to the original repository.

```BASH
git remote add upstream https://github.com/frankiefab100/Web3Collectives.git 
```

**5.** Confirm the remote for this repository.

```BASH
git remote -v
```

**6.** To setup the environment in your system run the following commands

```BASH
npm install
#OR
yarn install
```

**7.** Check if your cloned repo syncs with the upstream repository.

```BASH
git pull upstream main
```

**8.** Create a new branch.

```BASH
git checkout -b <your_branch_name>
```

**9.** Make necessary changes to the project code base.

**10.** Add your changes.

```BASH
git add . 
```

**11.** Commit your changes with a message.

```BASH
git commit -m "Relevant message"
```

**12.** Push the committed changes in your branch.

```BASH
git push origin <your_branch_name>
```

**13.** Go to repository on Github, Click `Compare & Pull Request`

**14.** Compare your feature branch to the desired branch of the repo you are supposed to make a PR to.

**15.** Add an appropriate title and description to your pull request explaining your changes and efforts done and click on make a PR. 

**16.** Wait for your submission to be reviewed, approved and your PR to be merged.

Bravo! 

### Report Bugs

If you ever noticed a bug or anything worth fixing, feel free to [**Open an issue**](https://github.com/frankiefab100/Web3Collectives/issues) with enough details of the bug, steps to fix it and screenshots if possible.
You can choose Templates for issues<a href="https://github.com/frankiefab100/Web3Collectives/issues/new/choose">here</a>.

## Submit Feedback

The best way to send feedback is to file an issue at <https://github.com/frankiefab100/Web3Collectives/issues>.

If you are proposing a feature

- Explain in detail how it would work and why it should be included.
- Keep the scope as narrow as possible, to make it easier to implement.
- Remember that contributions are welcome :)

## Commits

Ensure your commit messages adheres to the following guidelines:

- Keep your commits short but descriptive and in the imperative `e.g "fix bug" and not "fixed bug" or "fixes bug"`.
- Do not end a commit message with a period `.`
- Don't make two different changes in one pull request. If you see another issue aside from the one you are working on. Raise a different PR for it.
- And remember, the smaller the change, the faster for it to be reviewed and merged. 
- Do not delete or modify someone else's code in this repository, unless stated otherwise.
- Give a meaningful name to whatever file or folder you are adding.

 Check [Conventional Commits specification](https://conventionalcommits.org) for more information about our commit message guidelines.

## Pull Request

Ensure your pull request adheres to the following guidelines:

- Ensure you create a new branch for the assigned issue.
- Search previous suggestions before making a new one to avoid duplicates.
- Make an individual pull request for each suggestion.
- Use [title-casing](https://titlecaseconverter.com/) (AP style).
- Use the following format: `[Title Case Name](link)`
  > :information_source: [Useful Tools](https://github.com/BolajiAyodeji/awesome-technical-writing#useful-tools) should use the `[Title Case Name](link)` format with a description.
- Keep descriptions short and simple, but descriptive.
- Start the description with a capital and end with a full stop/period.
- Check your spelling and grammar.
- Make sure your text editor is set to remove trailing whitespace.
- Pull requests should have a useful title and description.
- The body of your commit message should contain a link to the resource.

## Licence

Your submissions are understood to be under the same [MIT License](https://opensource.org/licenses/MIT) that covers the project.

<p align="center">
[![built with love](https://forthebadge.com/images/badges/built-with-love.svg)](https://github.com/unnati914/Care4ther-)
</p>

**[Back](/README.md/)**
