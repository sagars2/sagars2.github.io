---
layout: article
titles:
  # @start locale config
  en      : &EN       
  en-GB   : *EN
  en-US   : *EN
  en-CA   : *EN
  en-AU   : *EN
  # @end locale config
key: page-home
# mode: immersive
---

<h1 class="page-title">Work Experience</h1>

<h2 class="role"><span>Forward Deployed Robotics Engineer | FieldAI</span><span class="role__meta">Feb 2026 - Present</span></h2>

- **Forward deployed engineer of record** for FieldAI's two largest industrial accounts, supporting **9 customer sites and 20+ [Boston Dynamics Spot](https://bostondynamics.com/products/spot/) robots**
- Migrated production robots from **ROS 1 to ROS 2** on site, preserving ~25 hours of operator-authored keep-in/keep-out zones
- Ported the **PTZ object-tracking node from Python to C++**, measuring **3.5x less CPU, 2.9x less memory, and 14x faster startup** at production message rates
- Root-caused **localization drift, code regressions, and network blockers** from robot logs, pose-graph error plots, and thermal dashboards
- Issued **fleet-wide advisories** that kept defective software off customer robots, and drove same-day fixes when regressions blocked live missions
- Owned software versioning and release readiness across **8 release lines**, reviewing and approving every change that reached customer robots
- Authored a **software validation proposal** for engineering leadership, raising the bar for how thoroughly software is tested before it reaches the field
- Established **release management and code ownership practices** adopted across the robot fleet
- Rolled out **autonomy-first intervention logging** across three accounts, making every operator takeover a reviewable data point
- Wrote **onboarding documentation, runbooks, and pre-deployment checklists**, and mentored new forward deployed and field application engineers through live incidents

<h2 class="role"><span>Robotics Deployment Engineer | Path Robotics</span><span class="role__meta">Sept 2023 - Feb 2026</span></h2>
### Multi Arm Robot Deployment

<div style="display: flex; gap: 10px; margin-bottom: 20px;">
  <img src="/assets/images/work_experience/creationofadam.png" style="width:50%">
  <img src="/assets/images/work_experience/creationofrobots.png" style="width:50%">
</div>


- Deployed the company’s **first [AW-3](https://www.path-robotics.com/robotic-welding-systems/aw3/) multi-robot production system** at a customer site
- Developed calibration plugins and automation scripts using **Python, Bash and C++**, cutting deployment bring-up time by **30%**  
- Served as **codeowner** for robot configurations (URDF, MoveIt, clearance planner configurations)  
- Built, debugged, and deployed robotic applications in **ROS**.  
- Created documentation and trained new engineers, ensuring smooth knowledge transfer to the operations team
- Experimented with Meta’s **Segment Anything Model (SAM)** to automate URDF validation by: extracting segmentation masks from CCTV images of robotic systems, generating corresponding masks from the 3D URDF model using camera intrinsics/extrinsics, and applying **LightGlue** for feature matching and validation
- Wrote approach strategies and workflows in **Python** for Path Robotics' flagship pick, place and weld [(AF-1)](https://www.path-robotics.com/robotic-welding-systems/af1/) robotic system, achieving a welding accuracy of 95%
- **Computed spatial transforms and implemented a software testing and release pipeline for production deployment** of a custom perception hardware package, achieving higher scan cloud point densities, increased seam accessibility, and improved non-rigid registration performance.

Raw Segment Anything Model (SAM) Results + LightGlue Output:

<div style="display: flex; gap: 10px; margin-bottom: 20px;">
  <img src="/assets/images/work_experience/lightgluepipeline2.png" style="width:100%">
</div>

Final Processed Results + LightGlue Output:
<div style="display: flex; gap: 10px; margin-bottom: 20px;">
  <img src="/assets/images/work_experience/lightgluepipeline1.png" style="width:100%">
</div>

First multi-robot system deployment:
<div style="width:100%; aspect-ratio:16/9;">
  <iframe src="https://drive.google.com/file/d/1z9sZqbbZgqzu9oLVIYqcdMh8ej-C6F9-/preview" width="100%" height="100%" allow="autoplay" allowfullscreen></iframe>
</div>