import subprocess
import os
import re

html_content = """<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Mayur Gangireddy - Resume</title>
<style>
  @page {
    size: A4;
    margin: 8mm 12mm 8mm 12mm;
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    color: #1e293b;
    background: #ffffff;
    font-size: 9.1pt;
    line-height: 1.34;
  }
  a {
    color: #1d4ed8;
    text-decoration: none;
    font-weight: 600;
  }
  a:hover {
    text-decoration: underline;
  }
  .header {
    text-align: center;
    border-bottom: 1.5px solid #0f172a;
    padding-bottom: 4.5px;
    margin-bottom: 7px;
  }
  .name {
    font-size: 21pt;
    font-weight: 800;
    letter-spacing: -0.5px;
    color: #0f172a;
    text-transform: uppercase;
    margin-bottom: 2px;
  }
  .title-sub {
    font-size: 10.3pt;
    font-weight: 700;
    color: #3730a3;
    margin-bottom: 3px;
    letter-spacing: 0.2px;
  }
  .contact {
    font-size: 8.9pt;
    color: #475569;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
  }
  .contact span.sep {
    color: #94a3b8;
  }

  .section {
    margin-bottom: 5.5px;
  }
  .section-title {
    font-size: 10.3pt;
    font-weight: 800;
    color: #0f172a;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    border-bottom: 1.2px solid #cbd5e1;
    padding-bottom: 1.5px;
    margin-bottom: 3.5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .summary {
    font-size: 9pt;
    color: #334155;
    text-align: justify;
    line-height: 1.34;
  }

  .job {
    margin-bottom: 4px;
  }
  .job-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 1.5px;
  }
  .job-title {
    font-size: 9.4pt;
    font-weight: 700;
    color: #0f172a;
  }
  .job-company {
    font-size: 9.4pt;
    font-weight: 700;
    color: #3730a3;
  }
  .job-date {
    font-size: 8.5pt;
    font-weight: 600;
    color: #64748b;
  }

  ul.bullets {
    list-style-type: none;
    padding-left: 0;
  }
  ul.bullets li {
    position: relative;
    padding-left: 12px;
    margin-bottom: 3px;
    font-size: 8.95pt;
    color: #334155;
    text-align: justify;
    line-height: 1.34;
  }
  ul.bullets li::before {
    content: "•";
    position: absolute;
    left: 1px;
    color: #4338ca;
    font-size: 9pt;
    line-height: 1;
    top: 2px;
  }

  .link-pill {
    display: inline-block;
    font-size: 7.5pt;
    font-weight: 600;
    color: #1d4ed8;
    background: #eff6ff;
    border: 0.5px solid #bfdbfe;
    padding: 0.5px 5px;
    border-radius: 3px;
    margin-left: 2px;
    margin-right: 2px;
  }

  .skills-grid {
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 8px;
    row-gap: 2.5px;
    font-size: 9pt;
  }
  .skills-label {
    font-weight: 700;
    color: #0f172a;
    white-space: nowrap;
  }
  .skills-val {
    color: #334155;
  }

  .edu-row {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 2px;
    font-size: 9.1pt;
  }
  .edu-inst {
    font-weight: 700;
    color: #0f172a;
  }
  .edu-deg {
    color: #3730a3;
    font-weight: 600;
  }
  .edu-date {
    font-size: 8.6pt;
    font-weight: 600;
    color: #64748b;
  }

  .achievements {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    font-size: 8.6pt;
    margin-top: 4px;
  }
  .ach-item {
    background: #f8fafc;
    border: 0.5px solid #cbd5e1;
    padding: 2.5px 7px;
    border-radius: 4px;
    color: #1e293b;
    font-weight: 500;
  }
  .ach-item strong {
    color: #0f172a;
  }
</style>
</head>
<body>

  <!-- HEADER -->
  <div class="header">
    <div class="name">MAYUR GANGIREDDY</div>
    <div class="title-sub">AI/ML Engineer &bull; Full-Stack Systems Developer</div>
    <div class="contact">
      <span>Hyderabad, Telangana, India</span>
      <span class="sep">|</span>
      <span>+91 6281192139</span>
      <span class="sep">|</span>
      <a href="mailto:mayurgangereddy12345@gmail.com">mayurgangereddy12345@gmail.com</a>
      <span class="sep">|</span>
      <a href="https://github.com/gangireddymayur" target="_blank">GitHub</a>
      <span class="sep">|</span>
      <a href="http://www.linkedin.com/in/mayur-gangireddy" target="_blank">LinkedIn</a>
      <span class="sep">|</span>
      <a href="https://gangireddymayur.github.io" target="_blank">Portfolio</a>
    </div>
  </div>

  <!-- CAREER SUMMARY -->
  <div class="section">
    <div class="section-title">Professional Summary</div>
    <div class="summary">
      <strong>AI/ML & Full-Stack Engineer</strong> with proven production experience deploying high-frequency time-series pipelines, edge intelligence, and cross-platform mobile systems published to the Google Play Store and Apple App Store. Specialized in energy disaggregation (NILM), privacy-preserving Model Context Protocol (MCP) data proxies, native hardware integrations (USB IRDA / OCR), and high-throughput web microservices.
    </div>
  </div>

  <!-- WORK EXPERIENCE -->
  <div class="section">
    <div class="section-title">Work Experience</div>

    <!-- BHARAT SMART SERVICES -->
    <div class="job">
      <div class="job-header">
        <div>
          <span class="job-company">Bharat Smart Services</span> &ndash; <span class="job-title">Machine Learning & Full-Stack Engineer</span>
        </div>
        <div class="job-date">01/2026 &ndash; Present | Hyderabad, India</div>
      </div>
      <ul class="bullets">
        <li>
          <strong>NILM Time-Series Energy Disaggregation:</strong> Built production appliance disaggregation models on high-frequency 5-second interval smart meter telemetry. Benchmarked 1D/2D CNNs and Temporal Transformers against an optimized sliding-window <strong>XGBoost</strong> pipeline; achieved <strong>97% state detection accuracy on Geysers</strong> and <strong>~85% F1-score on AC, Refrigerator, and Washing Machines</strong> (evaluated on held-out temporal splits), yielding sub-10ms CPU inference latency.
        </li>
        <li>
          <strong>NerveNet &ndash; Client-Side Encrypted Enterprise MCP Platform:</strong> Architected an enterprise AI agent platform on the <strong>Model Context Protocol (MCP)</strong>. Engineered client-side AES-256 encryption and key tokenization over private CSV tables and SQL databases, allowing cloud LLMs to execute reasoning and queries strictly over anonymized tokens without exposing unencrypted corporate records.
        </li>
        <li>
          <strong>Bharat Smart Services App (Utility & Billing)</strong>
          &nbsp;<a class="link-pill" href="https://play.google.com/store/apps/details?id=in.coral.met" target="_blank">Google Play</a>&nbsp;
          <a class="link-pill" href="https://apps.apple.com/in/app/bharat-smart-services/id1584345371" target="_blank">App Store</a>:
          Engineered cross-platform React/Capacitor app for live state discom billing (TSSPDCL, TSNPDCL, HMWSSB). Built custom native Java USB serial drivers for optical IRDA dongles, camera-based OCR meter reading review, and native iOS/Android home screen widgets.
        </li>
        <li>
          <strong>Bharat Smart Home (IoT Automation & Telemetry)</strong>
          &nbsp;<a class="link-pill" href="https://play.google.com/store/apps/details?id=com.bharat.smarthome" target="_blank">Google Play</a>&nbsp;
          <a class="link-pill" href="https://apps.apple.com/in/app/bharat-smart-home-energy-iot/id6737525389" target="_blank">App Store</a>:
          Architected smart home platform featuring hierarchical device control, condition-based automation schedules, lifestyle scene orchestration, and real-time disaggregated appliance energy intelligence.
        </li>
      </ul>
    </div>

    <!-- TELANGANA POLICE ACADEMY -->
    <div class="job">
      <div class="job-header">
        <div>
          <span class="job-company">Telangana State Police Academy (TGPA)</span> &ndash; <span class="job-title">Android Application Developer</span>
        </div>
        <div class="job-date">03/2024 &ndash; 08/2024 | Hyderabad, India</div>
      </div>
      <ul class="bullets">
        <li>
          <strong>Criminal Laws by TGPA</strong>
          &nbsp;<a class="link-pill" href="https://play.google.com/store/apps/details?id=com.sphn.tgpa&hl=en_IN" target="_blank">Google Play Store</a>:
          Sole developer of official state police legal repository app published on Google Play. Built sub-50ms offline search over criminal penal codes using SQLite FTS, bilingual legal document viewers, and AES-encrypted local storage.
        </li>
      </ul>
    </div>

    <!-- ACMEGRADE -->
    <div class="job">
      <div class="job-header">
        <div>
          <span class="job-company">Acmegrade</span> &ndash; <span class="job-title">Java Software Engineering Intern</span>
        </div>
        <div class="job-date">11/2023 &ndash; 01/2024 | Virtual</div>
      </div>
      <ul class="bullets">
        <li>
          Developed backend core Java service modules and relational database schemas with high-throughput transaction handling and structured error-handling middleware.
        </li>
      </ul>
    </div>
  </div>

  <!-- SELECTED PROJECTS -->
  <div class="section">
    <div class="section-title">Selected Projects</div>

    <ul class="bullets">
      <li>
        <strong>Hostel Hub Pro & Companion Mobile App:</strong>
        Multi-tenant accommodation platform connecting administrators, wardens, students, and guards. Built administrative web portal with <strong>TanStack Start SSR & React</strong>, companion <strong>Flutter app</strong> featuring time-restricted (24-hr) HMAC dynamic QR gate passes with server-side nonce verification to prevent pass re-use and sharing, and an Express/MySQL backend on Plesk.
      </li>
      <li>
        <strong>Satellite Ship Detection & Classification (YOLOv8)</strong>
        &nbsp;<a class="link-pill" href="https://shipdetectionyolov8.streamlit.app/" target="_blank">Live Demo</a>&nbsp;
        <a class="link-pill" href="https://github.com/gangireddymayur/Ship_Detection_YOLOv8" target="_blank">GitHub</a>:
        Engineered computer vision pipeline for high-resolution optical satellite imagery analysis. Implemented automated water/land masking followed by fine-tuned YOLOv8 deep learning vessel detection with confidence-scored bounding boxes.
      </li>
      <li>
        <strong>Samarth &ndash; Intelligent Agriculture & Climate Q&A Engine</strong>
        &nbsp;<a class="link-pill" href="https://github.com/gangireddymayur/Samarth-theChatBot" target="_blank">GitHub</a>:
        Built Natural Language to SQL analytics engine over Indian agricultural datasets using FastAPI and DuckDB. Enforced schema-constrained LLM prompt architecture and AST query validation, guaranteeing 100% auditable generated SQL execution logs.
      </li>
    </ul>
  </div>

  <!-- TECHNICAL SKILLS -->
  <div class="section">
    <div class="section-title">Technical Skills</div>
    <div class="skills-grid">
      <div class="skills-label">Languages:</div>
      <div class="skills-val">Python, TypeScript, JavaScript (ES6+), Java, SQL, Dart, C, C++</div>

      <div class="skills-label">AI & Machine Learning:</div>
      <div class="skills-val">XGBoost, PyTorch, Transformers, CNNs, Time-Series NILM, Model Context Protocol (MCP), YOLOv8, Computer Vision (OCR), LangChain, Scikit-Learn</div>

      <div class="skills-label">Web & Mobile:</div>
      <div class="skills-val">React.js, Node.js, Express, FastAPI, Capacitor.js, Flutter, Android (Java/Kotlin), Tailwind CSS, Vite</div>

      <div class="skills-label">Databases & Cloud:</div>
      <div class="skills-val">PostgreSQL, MySQL, MariaDB, DuckDB, Supabase, Firebase, Plesk Linux, RESTful APIs</div>

      <div class="skills-label">Tools & DevOps:</div>
      <div class="skills-val">Git, Docker, Android Studio, Xcode, Postman, Linux CLI, USB Serial Hardware (IRDA)</div>
    </div>
  </div>

  <!-- EDUCATION & HONORS -->
  <div class="section">
    <div class="section-title">Education & Honors</div>
    <div class="edu-row">
      <div>
        <span class="edu-inst">Sphoorthy Engineering College</span> &ndash;
        <span class="edu-deg">B.Tech in Computer Science & Engineering (AIML)</span>
      </div>
      <div class="edu-date">2021 &ndash; 2025 | Hyderabad, India</div>
    </div>
    <div class="edu-row">
      <div>
        <span class="edu-inst">Sri Gayatri Junior College</span> &ndash;
        <span class="edu-deg">Board of Intermediate Education (MPC)</span>
      </div>
      <div class="edu-date">2019 &ndash; 2021 | Hyderabad, India</div>
    </div>
    <div class="achievements">
      <div class="ach-item"><strong>National Finalist</strong> &ndash; Smart India Hackathon (SIH 2024)</div>
      <div class="ach-item"><strong>Production Apps</strong> &ndash; 3 Published Apps on Google Play Store & Apple App Store</div>
    </div>
  </div>

</body>
</html>
"""

html_path = "/Users/mayur/personal/PORTFOLIO/public/resume.html"
with open(html_path, "w") as f:
    f.write(html_content)

output_pdf = "/Users/mayur/personal/PORTFOLIO/public/Mayur_Gangireddy_Resume.pdf"
root_pdf = "/Users/mayur/personal/PORTFOLIO/Mayur_Gangireddy_Resume.pdf"

cmd = [
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "--headless",
    "--disable-gpu",
    "--run-all-compositor-stages-before-draw",
    f"--print-to-pdf={output_pdf}",
    "--no-pdf-header-footer",
    f"file://{html_path}"
]

res = subprocess.run(cmd, capture_output=True, text=True)
print("Chrome returncode:", res.returncode)

# Also copy to root
subprocess.run(["cp", output_pdf, root_pdf])
print("Generated PDF saved to:")
print(f"1. {output_pdf}")
print(f"2. {root_pdf}")

# Check page count
with open(output_pdf, "rb") as f:
    pdf_bytes = f.read()
pages = re.findall(b'/Type\\s*/Page[^s]', pdf_bytes)
print("Page count:", len(pages))
