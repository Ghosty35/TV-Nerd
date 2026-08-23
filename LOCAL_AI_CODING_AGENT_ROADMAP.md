# Local AI Coding Agent Roadmap

A phased roadmap for building a local coding agent similar to Claude Code, OpenCode, or KiloCode, with stronger verification, game-development workflows, safety controls, memory, evaluation, and extensibility.

## Product Goal

Build a **local coding-agent platform**, not a foundation model from scratch. The agent should run a local coding model, inspect repositories, edit files, execute tests, launch a game, inspect results, and improve from human feedback.

> A private terminal and IDE coding agent that can understand a repository, safely modify it, run the project, diagnose failures, and improve from feedback.

## Target Architecture

```text
Terminal UI / IDE extension
          |
          v
Agent Orchestrator
  |       |        |        |
Context  Tools   Memory   Permissions
Engine   System  System   and Sandbox
          |
          v
Local Model Runtime
Ollama / llama.cpp / vLLM / LM Studio
          |
          v
Local Coding Model
```

The system should eventually support:

- Terminal usage
- OpenCode compatibility
- KiloCode compatibility
- VS Code or Cursor-style integrations
- Local models
- Optional hosted models
- Multiple model providers
- Game-specific testing
- Project-aware memory
- Safe autonomous execution
- Plugin support

## Phase 0: Define What “Better” Means

Before writing code, choose the dimensions where your agent should outperform Claude Code.

Good targets include:

- Better local privacy
- Better support for large repositories
- Better game development workflows
- Better visual testing
- Better Windows support
- Lower cost
- Faster responses
- More reliable patches
- Better test-driven repair
- More control over permissions
- Better session memory
- Better multi-agent workflows

Do not define “better” as simply “has more features.” Define measurable targets.

Example:

```text
The agent must successfully complete 80% of benchmark tasks,
must not modify files outside the project,
must run tests after every code change,
and must recover from failed builds without human intervention.
```

### Deliverables

- Product requirements document
- Supported operating systems
- Supported languages
- Supported game engine
- Model hardware requirements
- Initial benchmark tasks
- Security requirements
- Definition of success

## Phase 1: Choose the Local Model Strategy

Your system needs a model runtime and a coding model.

### Model Runtimes

Support an adapter interface so the rest of the application does not depend on one runtime:

- Ollama
- llama.cpp
- LM Studio
- vLLM
- OpenAI-compatible local servers

Use the strongest model your hardware can run at a reasonable speed. Model selection depends on:

- GPU VRAM
- System RAM
- Context-window size
- Quantization quality
- Coding benchmark performance
- Tool-calling support
- Streaming support
- License restrictions
- Operating system compatibility

### Model Roles

You may eventually use different models for different tasks:

```text
Primary coding model:
  Plans, edits, debugs, and explains code.

Fast router model:
  Classifies requests and selects tools.

Review model:
  Reviews patches independently.

Context model:
  Ranks relevant files and code snippets.

Vision model:
  Inspects screenshots and game output.

Small local model:
  Handles simple searches, summaries, and formatting.
```

Start with one model. Add model routing after the core workflow is reliable.

### Deliverables

- Local model runtime installed
- Model adapter interface
- Streaming responses
- Tool-call support
- Token and latency tracking
- Model configuration file
- Fallback provider support

## Phase 2: Create the Agent Runtime

Build the central orchestration loop.

```text
Receive task
    |
Understand request
    |
Inspect repository
    |
Create plan
    |
Call tools
    |
Apply changes
    |
Run verification
    |
Repair failures
    |
Summarize result
```

The agent should not be a single giant prompt. Implement an explicit state machine:

```text
Idle
Planning
Exploring
Editing
Verifying
Repairing
WaitingForApproval
Completed
Failed
Cancelled
```

Each action should produce an event:

```json
{
  "type": "tool_call",
  "tool": "read_file",
  "input": {
    "path": "src/player.ts"
  },
  "timestamp": "2026-08-23T12:00:00Z"
}
```

This enables:

- Resume after interruption
- Debugging
- Replay
- Auditing
- Training-data generation
- User-visible progress
- Cost analysis

### Deliverables

- Agent loop
- State machine
- Event log
- Cancellation support
- Timeouts
- Retry handling
- Streaming output
- Session IDs
- Resume support

## Phase 3: Build the Repository Context Engine

The model cannot receive the entire repository every time. Build a context engine that finds the most relevant information.

### Repository Map

Generate a compact map containing:

- Directory structure
- Important configuration files
- Package manifests
- Entry points
- Build commands
- Test commands
- Git status
- Recent commits
- Existing documentation
- Language and framework information

### Code Search

Use fast local search and structured parsing:

- Text search
- Symbol search
- File-name search
- Import and dependency lookup
- Reference lookup
- Error-message search
- Git history search

### Code Intelligence

Add progressively:

1. ripgrep-style text search
2. Tree-sitter parsing
3. Symbol extraction
4. Import graph
5. Dependency graph
6. LSP integration
7. Semantic embeddings
8. Hybrid retrieval

Use hybrid retrieval rather than embeddings alone:

```text
Exact search
+ Symbol search
+ Dependency relationships
+ File importance
+ Recent changes
+ Semantic similarity
```

### Context Rules

The context engine should:

- Prefer relevant files
- Include surrounding code
- Include type definitions
- Include tests
- Include configuration
- Avoid duplicate snippets
- Track what the model has already seen
- Preserve important decisions
- Compact old history intelligently

### Deliverables

- Repository scanner
- Project-type detector
- Context ranking
- Search tools
- Symbol index
- Dependency map
- Context-size manager
- Automatic context summaries

## Phase 4: Build the Tool System

Every tool should have:

- A name
- A strict input schema
- Permission requirements
- An execution timeout
- Output limits
- Structured results
- Error handling
- Audit logging

### Core Tools

```text
list_files
read_file
search_code
find_symbol
find_references
get_project_map
git_status
git_diff
git_log
create_patch
apply_patch
write_file
run_command
run_tests
start_game
stop_game
capture_screenshot
read_logs
get_diagnostics
```

Separate tools by risk level:

```text
Safe:
  Read files, search code, inspect git status.

Moderate:
  Apply patches, install dependencies, run builds.

High risk:
  Delete files, modify databases, access network, deploy, push git changes.
```

The model should never receive unrestricted access to your machine.

### Deliverables

- Tool registry
- JSON schemas
- Tool permission metadata
- Timeout system
- Output truncation
- Structured errors
- Tool-call audit log
- Tool testing framework

## Phase 5: Make Editing Reliable

File editing is one of the most important parts of the product.

Prefer structured patch operations over asking the model to rewrite entire files.

The editing system should:

- Require the target file to exist when appropriate
- Verify the expected old content
- Detect stale edits
- Reject ambiguous replacements
- Show a preview
- Preserve line endings
- Preserve file encoding
- Create automatic snapshots
- Support undo
- Report exact changed lines

Use a flow like:

```text
Model proposes patch
      |
Patch parser validates it
      |
Patch preview is generated
      |
Permission check runs
      |
Patch applies in worktree
      |
Formatter runs if configured
      |
Diff is returned to model
```

Add edit strategies for:

- Unified diffs
- Exact replacement
- AST transformations
- Structured JSON edits
- Configuration-file edits
- Code generation

### Deliverables

- Patch application
- Conflict detection
- Preview mode
- Undo support
- Formatting support
- Diff viewer
- Automatic snapshots
- Partial patch recovery

## Phase 6: Add Permissions and Sandboxing

This is mandatory for an autonomous local coding agent.

### Default Behavior

- Read-only access initially
- Project-directory restriction
- No network by default
- No access to personal files
- No access to secrets
- No deployment commands
- No `git push`
- No destructive commands without approval

### Isolation Options

Use progressively stronger isolation:

```text
Basic:
  Command allowlist and project-directory restriction.

Better:
  Temporary Git worktree per task.

Stronger:
  Container or virtual machine.

Advanced:
  Disposable sandbox with restricted network and filesystem access.
```

Every task should be recoverable:

```text
Create worktree
Apply changes
Run tests
Review diff
Accept, reject, or reset worktree
```

### Approval UI

The user should see:

```text
The agent wants to run:
  npm install

Reason:
  A missing dependency is required to run the test suite.

Risk:
  This accesses the package registry and changes lockfiles.

[Allow Once] [Allow For Session] [Deny]
```

### Deliverables

- Command risk classifier
- Approval prompts
- Allow and deny rules
- Worktree manager
- Environment-variable filtering
- Secret redaction
- Network policy
- Cancellation and cleanup
- Full audit trail

## Phase 7: Build the Verification and Repair Loop

This is where your agent can become significantly better than a basic coding assistant.

After every meaningful change:

```text
Run formatter
Run type checker
Run targeted tests
Run integration tests
Launch the game if relevant
Collect logs
Capture screenshots
Inspect diagnostics
Review the diff
```

When something fails, the agent should:

1. Identify the failing command.
2. Read the relevant error.
3. Locate the source.
4. Explain the likely cause internally.
5. Apply a minimal fix.
6. Rerun the smallest relevant check.
7. Escalate to broader tests.
8. Stop after a configurable retry limit.

Do not let it endlessly retry. Use a repair budget:

```text
Maximum repair attempts: 5
Maximum runtime: 10 minutes
Maximum files changed without approval: 20
```

### Verification Types

```text
Static:
  Type checking, linting, formatting, compiler diagnostics.

Unit:
  Focused tests for changed code.

Integration:
  Multiple systems working together.

Runtime:
  Launching the game or application.

Visual:
  Screenshot comparison and UI inspection.

Behavioral:
  Simulated player or user actions.

Performance:
  Frame rate, memory, CPU, loading time.

Regression:
  Existing scenarios must continue to pass.
```

### Deliverables

- Verification pipeline
- Test discovery
- Failure parser
- Retry budget
- Automatic repair loop
- Screenshot capture
- Runtime log collection
- Final quality report

## Phase 8: Integrate Your Game as a Test Environment

Your game can become an excellent benchmark and training environment.

Create a dedicated automated test mode with:

- Deterministic seed
- Headless launch option
- Fixed time-step mode
- Test maps
- Debug commands
- Save-state loading
- Bot or scripted player input
- Machine-readable logs
- Screenshot checkpoints
- Crash detection
- Performance metrics

### Example Test Scenarios

```text
Player can start a new game.
Player can complete the tutorial.
Enemy pathfinding does not get stuck.
The player cannot leave the map.
Inventory items persist after saving.
The boss encounter can be completed.
No critical errors appear during a level.
Frame rate stays above the target.
```

Use game-specific assertions:

```json
{
  "scenario": "enemy_pathfinding_wall_test",
  "success": true,
  "metrics": {
    "path_found": true,
    "seconds_to_target": 4.2,
    "frame_rate": 119,
    "errors": 0
  }
}
```

For visual checks:

```text
Launch test scene
Perform fixed actions
Capture screenshot
Compare against baseline
Send differences to the vision model
```

The model should not decide success based only on its own opinion. Use objective signals whenever possible.

### Deliverables

- Automated test scene
- Headless or controlled game launch
- Game log parser
- Screenshot checkpoints
- Scenario runner
- Performance collector
- Crash reporter
- Gameplay benchmark suite

## Phase 9: Build the User Experience

The terminal interface should be useful for repeated development work.

### Core Modes

```text
Ask:
  Answer questions without editing.

Plan:
  Investigate and propose a plan.

Implement:
  Make changes and verify them.

Review:
  Inspect existing code or a pull request.

Debug:
  Focus on a failure or crash.

Test:
  Run and repair tests.

Explore:
  Explain project structure.

Autonomous:
  Work until a configured completion condition.
```

### Useful Commands

```text
/plan
/review
/test
/diff
/undo
/status
/files
/permissions
/model
/compact
/resume
/cancel
```

Include:

- Streaming responses
- Tool progress
- Collapsible command output
- Diff previews
- Approval prompts
- Search history
- Session resume
- Cost and token counters
- Current worktree status
- Failure explanations
- Keyboard cancellation
- Exportable transcripts

Do not make every action a text command. Use familiar icons and keyboard shortcuts where the interface supports them.

### Deliverables

- Terminal UI
- Interactive approval flow
- Diff display
- Session browser
- Resume support
- Progress display
- Model selector
- Permission settings
- Configuration editor

## Phase 10: Add Memory

Use different memory types instead of one giant conversation history.

### Short-Term Memory

Current task, recent tool calls, current files, and active errors.

### Project Memory

Store facts such as:

```text
The game uses Unity.
Tests run with command X.
The player controller lives in Y.
Do not modify generated files.
The project uses a fixed timestep.
```

### Decision Memory

Record decisions made during work:

```text
The inventory system must remain backward compatible.
The save format cannot change without migration.
```

### Long-Term Memory

Store accepted patterns and recurring fixes.

Memory must be:

- Searchable
- Editable
- Deletable
- Scoped per project
- Time-stamped
- Traceable to its source
- Prevented from overriding actual source code

Source code should always outrank stale memory.

## Phase 11: Add LSP and Language Intelligence

LSP support gives the agent more reliable information than text search alone.

Support:

- Diagnostics
- Go to definition
- Find references
- Type information
- Rename preview
- Workspace symbols
- Code actions
- Document outline

Start with the languages used by your game. Do not support every language immediately.

Add language adapters for:

```text
Project detection
Build commands
Test commands
Formatter
Linter
Debugger
LSP server
Generated-file rules
```

This should be configuration-driven rather than hardcoded into the model prompt.

## Phase 12: Add Planning and Task Management

Large tasks need persistent plans.

The plan system should contain:

```json
{
  "goal": "Add checkpoint respawning",
  "steps": [
    {
      "description": "Inspect player save state",
      "status": "completed"
    },
    {
      "description": "Implement checkpoint persistence",
      "status": "in_progress"
    },
    {
      "description": "Add regression tests",
      "status": "pending"
    }
  ]
}
```

The agent should:

- Break large tasks into steps
- Track completed work
- Re-evaluate the plan when assumptions change
- Avoid repeating completed investigation
- Ask for clarification when requirements conflict
- Summarize unresolved risks

## Phase 13: Add Specialized Sub-Agents

Once the single-agent system is reliable, add specialized agents.

Possible roles:

```text
Planner:
  Breaks down the task.

Explorer:
  Maps the repository and finds relevant code.

Implementer:
  Writes the patch.

Reviewer:
  Reviews the patch independently.

Tester:
  Designs and runs tests.

Game QA agent:
  Plays scripted scenarios and inspects screenshots.

Performance agent:
  Checks frame rate, memory, and load times.

Security agent:
  Searches for unsafe behavior and secret exposure.
```

Do not allow agents to modify the same files concurrently without coordination.

Use a coordinator:

```text
Coordinator assigns tasks
Agents produce findings
Coordinator resolves conflicts
Implementer applies changes
Reviewer checks final patch
Tester verifies behavior
```

## Phase 14: Support OpenCode and KiloCode

Do not tightly couple your internal agent to a particular client.

Expose standard interfaces:

- OpenAI-compatible model API
- Streaming responses
- Tool definitions
- MCP-compatible tools if appropriate
- Configuration-based providers
- Terminal command interface
- Plugin API
- Event hooks
- Workspace/session API

Your internal components should be reusable:

```text
Model adapter
Agent runtime
Tool registry
Context engine
Permission system
Verification engine
UI clients
```

This allows:

```text
Your terminal UI -> your agent runtime
OpenCode -> your model adapter or tools
KiloCode -> your model adapter or tools
VS Code -> your agent API
```

Treat compatibility as an adapter layer rather than the foundation of the system.

## Phase 15: Build the Learning and Improvement Pipeline

The agent should not silently modify its own model weights. That is unsafe and makes regressions difficult to diagnose.

Instead, collect structured experience:

```text
User request
Repository state
Agent plan
Tool calls
Files changed
Tests before
Tests after
Runtime logs
Screenshots
Human approval
Human corrections
Final result
```

### Outcome Classification

```text
Success:
  Correct patch and tests pass.

Partial success:
  Useful patch but incomplete behavior.

Failure:
  Incorrect patch, broken build, or wrong diagnosis.

Unsafe:
  Violated permissions or attempted dangerous action.

No-op:
  Agent could not make progress.
```

Use the data in this order:

1. Improve tool schemas.
2. Improve context retrieval.
3. Improve verification.
4. Add better system prompts.
5. Add project-specific instructions.
6. Add retrieval examples.
7. Train a patch-ranking model.
8. Fine-tune a coding model.
9. Consider preference optimization.
10. Only consider training a base model after you have massive data and infrastructure.

### Most Valuable Training Examples

- A bad patch followed by a corrected patch
- A failed test followed by the fix
- An irrelevant context selection
- A successful multi-step repair
- A human explanation of why a patch was rejected
- A game behavior regression and its correction

## Phase 16: Create an Evaluation System

You need an automated benchmark before claiming the agent is better.

### Benchmark Categories

```text
Code navigation
Bug fixing
Feature implementation
Refactoring
Test generation
Build repair
Dependency updates
Performance optimization
Security review
Game behavior repair
Visual regression repair
```

### Metrics

Track:

- Task completion rate
- Tests-passing rate
- First-patch success rate
- Number of repair attempts
- Files changed
- Reverted patches
- Human approval rate
- Incorrect tool-call rate
- Hallucinated file rate
- Average latency
- Token usage
- CPU and memory usage
- Model cost
- Regression rate
- Security violations
- Game scenario success rate

A patch should not count as successful merely because the model says it is finished.

## Phase 17: Security, Privacy, and Reliability

Before releasing it, test hostile cases.

### Security Tests

- Prompt injection inside source comments
- Malicious instructions inside README files
- Secret exposure
- Unsafe shell commands
- Path traversal
- Symlink escapes
- Network exfiltration
- Command injection
- Dependency installation abuse
- Malicious generated code
- Untrusted test fixtures

### Reliability Tests

- Model disconnects
- Tool hangs
- Corrupt session
- Partial patch application
- Large command output
- Build timeout
- Game crash
- Screenshot failure
- Context overflow
- Concurrent edits
- User cancellation

The agent must fail closed when uncertain.

## Phase 18: Performance and Packaging

Optimize only after measuring.

Important optimizations:

- Cache repository scans
- Cache file summaries
- Cache embeddings
- Stream model output
- Truncate command output intelligently
- Run independent searches concurrently
- Use small models for simple tasks
- Use larger models only for difficult edits
- Reuse LSP processes
- Avoid resending unchanged context
- Compact sessions automatically

### Packaging Targets

```text
Local CLI
Desktop installer
VS Code extension
OpenCode provider
KiloCode provider
Optional local daemon
Optional web dashboard for local sessions
```

The local daemon can manage:

- Model processes
- Sessions
- Worktrees
- Tool execution
- Logs
- Configuration
- Multiple client connections

## Suggested Project Structure

```text
local-coding-agent/
  apps/
    cli/
    desktop/
    vscode/
  packages/
    agent-core/
    model-adapters/
    context-engine/
    tool-system/
    permission-system/
    sandbox/
    verification/
    game-runner/
    memory/
    evaluation/
    protocol/
  projects/
    adapters/
      unity/
      unreal/
      godot/
      generic/
  tests/
    unit/
    integration/
    security/
    benchmark/
  docs/
    architecture/
    configuration/
    contributing/
```

## Recommended Development Order

### Milestone 1: Basic Local Agent

It can:

- Accept a task
- Read files
- Search code
- Explain the repository
- Stream model responses

### Milestone 2: Safe Coding Agent

It can:

- Create patches
- Show diffs
- Ask permission
- Run tests
- Undo changes

### Milestone 3: Reliable Repair Agent

It can:

- Detect build failures
- Read diagnostics
- Repair errors
- Retry within limits
- Produce a verified final report

### Milestone 4: Game Development Agent

It can:

- Launch the game
- Run test scenes
- Read game logs
- Capture screenshots
- Inspect gameplay results
- Detect regressions

### Milestone 5: Persistent Engineering Agent

It can:

- Resume sessions
- Remember project conventions
- Track plans
- Maintain task history
- Learn from accepted patches

### Milestone 6: Multi-Agent Development System

It can:

- Delegate exploration
- Run independent reviews
- Generate tests
- Review screenshots
- Compare multiple proposed patches

### Milestone 7: Ecosystem Product

It has:

- Plugin APIs
- OpenCode support
- KiloCode support
- VS Code integration
- Configurable model providers
- Sandboxed execution
- Benchmark reports
- Installers and documentation

## Practical MVP Specification

Your first usable version should support this exact workflow:

```text
User:
  Fix the enemy pathfinding bug near walls.

Agent:
  1. Inspects the project.
  2. Finds the enemy movement code.
  3. Reads related tests and configuration.
  4. Creates a plan.
  5. Shows or applies a patch.
  6. Runs the relevant tests.
  7. Launches the pathfinding test scene.
  8. Reads logs and captures a screenshot.
  9. Repairs failures if needed.
  10. Shows the final diff and verification results.
```

If this workflow is reliable, you have the foundation of the product.

## Realistic Timeline

For one experienced developer:

```text
Weeks 1-2:
  Product definition, model adapter, basic CLI.

Weeks 3-6:
  Agent loop, repository search, file reading, patches.

Weeks 7-10:
  Permissions, worktrees, command execution, tests.

Weeks 11-14:
  Verification and automatic repair.

Weeks 15-18:
  Game runner, logs, screenshots, gameplay scenarios.

Months 5-6:
  Memory, LSP, plans, evaluation benchmarks.

Months 7-9:
  Sub-agents, plugin API, OpenCode/KiloCode integrations.

Months 10-12:
  Packaging, security hardening, performance, beta release.
```

A smaller MVP can be built much sooner. A robust product with all the features above is a substantial software platform.

## The Most Important Design Principle

Do not depend on the model being perfect.

Make the surrounding system strong:

```text
Good context
+ safe tools
+ reliable patches
+ objective tests
+ game simulation
+ clear permissions
+ persistent memory
+ independent review
= strong local coding agent
```

Your game should be used as:

- A real project the agent can improve
- A benchmark suite
- A source of debugging tasks
- A visual regression environment
- A source of accepted and rejected patches
- A testbed for autonomous coding

That gives you a practical path to building an agent that becomes better over time without allowing uncontrolled self-training or unsafe self-modification.

## First Action Checklist

Start with these concrete tasks:

- [ ] Decide which game engine and programming languages to support first.
- [ ] Record your computer’s GPU VRAM, system RAM, CPU, and operating system.
- [ ] Choose one local model runtime.
- [ ] Choose one coding model that supports tool use or an OpenAI-compatible API.
- [ ] Create a small CLI prototype.
- [ ] Implement repository listing, file reading, and code search.
- [ ] Add structured patch application.
- [ ] Add a diff preview before edits are accepted.
- [ ] Add command approvals and project-directory restrictions.
- [ ] Add build, test, and game-launch commands.
- [ ] Create the first deterministic game test scenario.
- [ ] Record successful and failed agent sessions.
- [ ] Establish a benchmark before adding advanced features.
