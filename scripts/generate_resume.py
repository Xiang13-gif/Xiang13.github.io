from __future__ import annotations

import html
import sys
from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfbase import pdfmetrics
from reportlab.platypus import (
    BaseDocTemplate,
    Frame,
    HRFlowable,
    PageBreak,
    PageTemplate,
    Paragraph,
    Spacer,
    Table,
    TableStyle,
)


TEAL = colors.HexColor("#126B6C")
AMBER = colors.HexColor("#D89424")
INK = colors.HexColor("#1C252B")
MUTED = colors.HexColor("#58656D")
LINE = colors.HexColor("#D4DADD")
PAPER = colors.white


def register_fonts() -> tuple[str, str]:
    regular_candidates = [
        Path("/System/Library/Fonts/Supplemental/Arial.ttf"),
        Path("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"),
    ]
    bold_candidates = [
        Path("/System/Library/Fonts/Supplemental/Arial Bold.ttf"),
        Path("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"),
    ]
    regular = next((path for path in regular_candidates if path.exists()), None)
    bold = next((path for path in bold_candidates if path.exists()), None)
    if regular and bold:
        pdfmetrics.registerFont(TTFont("PortfolioSans", str(regular)))
        pdfmetrics.registerFont(TTFont("PortfolioSans-Bold", str(bold)))
        return "PortfolioSans", "PortfolioSans-Bold"
    return "Helvetica", "Helvetica-Bold"


FONT, FONT_BOLD = register_fonts()


def safe(text: str) -> str:
    return html.escape(text)


def build_resume(output_path: Path) -> None:
    output_path.parent.mkdir(parents=True, exist_ok=True)
    styles = getSampleStyleSheet()

    name_style = ParagraphStyle(
        "Name",
        parent=styles["Normal"],
        fontName=FONT_BOLD,
        fontSize=22,
        leading=24,
        textColor=INK,
        spaceAfter=3,
    )
    role_style = ParagraphStyle(
        "Role",
        parent=styles["Normal"],
        fontName=FONT_BOLD,
        fontSize=10.5,
        leading=14,
        textColor=TEAL,
        spaceAfter=5,
    )
    contact_style = ParagraphStyle(
        "Contact",
        parent=styles["Normal"],
        fontName=FONT,
        fontSize=8.2,
        leading=12,
        textColor=MUTED,
    )
    section_style = ParagraphStyle(
        "Section",
        parent=styles["Normal"],
        fontName=FONT_BOLD,
        fontSize=10.5,
        leading=13,
        textColor=TEAL,
        spaceBefore=8,
        spaceAfter=5,
        borderPadding=(0, 0, 3, 0),
        borderWidth=0,
    )
    body_style = ParagraphStyle(
        "Body",
        parent=styles["Normal"],
        fontName=FONT,
        fontSize=8.7,
        leading=12.3,
        textColor=INK,
        alignment=TA_LEFT,
        spaceAfter=4,
    )
    small_style = ParagraphStyle(
        "Small",
        parent=body_style,
        fontSize=8,
        leading=11,
        textColor=MUTED,
        spaceAfter=3,
    )
    bullet_style = ParagraphStyle(
        "Bullet",
        parent=body_style,
        leftIndent=10,
        firstLineIndent=-7,
        bulletIndent=0,
        spaceAfter=3,
    )
    job_style = ParagraphStyle(
        "Job",
        parent=body_style,
        fontName=FONT_BOLD,
        fontSize=9.5,
        leading=12,
        spaceAfter=1,
    )

    def paragraph(text: str, style: ParagraphStyle = body_style) -> Paragraph:
        return Paragraph(safe(text), style)

    def bullet(text: str) -> Paragraph:
        return Paragraph(f"<bullet>&bull;</bullet>{safe(text)}", bullet_style)

    def section(title: str) -> list:
        return [Paragraph(safe(title.upper()), section_style), HRFlowable(width="100%", thickness=0.6, color=LINE, spaceAfter=5)]

    def footer(canvas, doc) -> None:
        canvas.saveState()
        canvas.setStrokeColor(LINE)
        canvas.setLineWidth(0.4)
        canvas.line(18 * mm, 12 * mm, 192 * mm, 12 * mm)
        canvas.setFont(FONT, 7.5)
        canvas.setFillColor(MUTED)
        canvas.drawString(18 * mm, 8 * mm, "Tan Ze Xiang - Credit Operations Business Analyst")
        canvas.drawRightString(192 * mm, 8 * mm, f"Page {doc.page}")
        canvas.restoreState()

    doc = BaseDocTemplate(
        str(output_path),
        pagesize=A4,
        leftMargin=18 * mm,
        rightMargin=18 * mm,
        topMargin=15 * mm,
        bottomMargin=17 * mm,
        title="Tan Ze Xiang - Credit Operations Business Analyst Resume",
        author="Tan Ze Xiang",
        subject="Credit Operations and Banking Systems Business Analyst resume",
    )
    frame = Frame(doc.leftMargin, doc.bottomMargin, doc.width, doc.height, id="resume")
    doc.addPageTemplates([PageTemplate(id="resume", frames=[frame], onPage=footer)])

    story = [
        Paragraph("TAN ZE XIANG", name_style),
        Paragraph("CREDIT OPERATIONS &amp; BANKING SYSTEMS BUSINESS ANALYST", role_style),
        Paragraph(
            "Kuala Lumpur, Malaysia | tanzexiang8@gmail.com | "
            "linkedin.com/in/tan-ze-xiang-3b213a143 | github.com/Xiang13-gif",
            contact_style,
        ),
        Spacer(1, 4),
        HRFlowable(width="100%", thickness=1.2, color=TEAL, spaceAfter=7),
    ]

    story += section("Professional Summary")
    story.append(paragraph(
        "Banking Business Analyst supporting loan origination, business credit, retail banking, and foreign-exchange system change since 2019. Skilled in requirement analysis, functional clarification, UAT and regression, defect triage, root-cause investigation, traceability, production verification, and stakeholder coordination. Combines banking-domain understanding with SQL, log, API, data, and UI/backend reasoning."
    ))

    story += section("Professional Experience")
    story.append(Table(
        [[Paragraph("BUSINESS ANALYST", job_style), Paragraph("Hitachi eBworx | Apr 2023 - Present", job_style)]],
        colWidths=[doc.width * 0.52, doc.width * 0.48],
        style=TableStyle([("ALIGN", (1, 0), (1, 0), "RIGHT"), ("VALIGN", (0, 0), (-1, -1), "TOP"), ("LEFTPADDING", (0, 0), (-1, -1), 0), ("RIGHTPADDING", (0, 0), (-1, -1), 0)])
    ))
    story.append(Paragraph("Loan Origination | Business Credit | Retail Banking | FX Deal System", small_style))
    for item in [
        "Analyze and translate requirements across business, operations, and technology stakeholders for banking system enhancements.",
        "Maintain requirement-to-test traceability and support integration testing, SIT, UAT, regression, and production verification across interconnected modules.",
        "Prepare reusable test assets, review UI and system behavior, and validate functional, interface, and backend outcomes with delivery teams.",
        "Facilitate defect triage and root-cause investigation using reproducible evidence, logs, business impact, and controlled retest scope.",
        "Support document-generation automation, field mapping, template validation, output verification, and operational documentation.",
        "Coordinate release readiness, post-release monitoring, issue follow-up, and stakeholder decisions.",
    ]:
        story.append(bullet(item))

    story.append(Spacer(1, 3))
    story.append(Table(
        [[Paragraph("ASSOCIATE BUSINESS ANALYST", job_style), Paragraph("Hitachi eBworx | Sep 2019 - Apr 2023", job_style)]],
        colWidths=[doc.width * 0.52, doc.width * 0.48],
        style=TableStyle([("ALIGN", (1, 0), (1, 0), "RIGHT"), ("VALIGN", (0, 0), (-1, -1), "TOP"), ("LEFTPADDING", (0, 0), (-1, -1), 0), ("RIGHTPADDING", (0, 0), (-1, -1), 0)])
    ))
    story.append(Paragraph("Requirement Documentation | UAT | Defect Management | Production Support", small_style))
    for item in [
        "Translated business requirements into functional specifications and testable behavior for SIT, UAT, and regression delivery.",
        "Prepared and maintained test cases, evidence templates, execution status, and end-to-end audit records.",
        "Coordinated defect ownership, business-impact clarification, retest evidence, closure decisions, and release-day verification.",
        "Used JIRA, Confluence, and HP ALM to manage requirements, test execution, defects, traceability, and delivery communication.",
        "Supported users after go-live by reproducing reported issues and coordinating resolution within agreed service expectations.",
    ]:
        story.append(bullet(item))

    story += section("Core Capabilities")
    capability_data = [
        [paragraph("Business Analysis", job_style), paragraph("Banking Domain", job_style)],
        [paragraph("Requirements, functional specification, process mapping, impact analysis, business rules, acceptance criteria, traceability", small_style), paragraph("Loan origination, business credit, credit operations, retail banking, FX dealing, approval and document controls", small_style)],
        [paragraph("Testing & Delivery", job_style), paragraph("Technical Collaboration", job_style)],
        [paragraph("Integration testing, SIT, UAT, regression, defects, retest evidence, production verification, release support", small_style), paragraph("SQL, log analysis, API awareness, data validation, field mapping, UI/backend behavior, GitHub, TypeScript portfolio execution", small_style)],
    ]
    story.append(Table(capability_data, colWidths=[doc.width / 2, doc.width / 2], style=TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 10),
        ("TOPPADDING", (0, 0), (-1, -1), 2),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 4),
    ])))

    story.append(PageBreak())
    story += section("Selected Contribution Highlights")
    for item in [
        "Built and maintained reusable test assets and structured evidence to support repeatable execution and audit readiness.",
        "Raised ambiguous behavior and exception paths to accountable business and control stakeholders before converting them into test and release evidence.",
        "Reviewed UI and system behavior with business and technology teams to align functional outcomes with user needs.",
        "Supported document automation through dynamic field mapping, template validation, and Word/PDF output verification.",
        "Used monitoring views, logs, and structured follow-up to improve visibility and investigation after release.",
        "Supported a temporary FX deal-system assignment requiring fast domain learning and regulated-process awareness.",
    ]:
        story.append(bullet(item))

    story += section("Selected Portfolio Evidence")
    story.append(paragraph("CreditFlow BA Toolkit - Independent portfolio project using mock data and generalized commercial-credit workflows."))
    for item in [
        "Connects requirements, business rules, approval routing, document controls, UAT, defects, change impact, traceability, and release readiness.",
        "Includes strict TypeScript, business-rule tests, Playwright workflow tests, OpenAPI, SQL, BA documents, CI, public GitHub history, and a live demo.",
        "GitHub: github.com/Xiang13-gif/business-credit-system-enhancement-case-study",
    ]:
        story.append(bullet(item))

    story += section("Education, Tools & Languages")
    education_data = [
        [paragraph("Bachelor of Computer Science (Internet Technology)", job_style), paragraph("Tunku Abdul Rahman University College | 2017 - 2019", small_style)],
        [paragraph("Diploma in Computer Science (Internet Technology)", job_style), paragraph("University of Tunku Abdul Rahman | 2015 - 2017", small_style)],
    ]
    story.append(Table(education_data, colWidths=[doc.width * 0.58, doc.width * 0.42], style=TableStyle([
        ("ALIGN", (1, 0), (1, -1), "RIGHT"),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 0),
        ("TOPPADDING", (0, 0), (-1, -1), 1),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
    ])))
    story.append(paragraph("Tools: JIRA, Confluence, HP ALM, SQL, Microsoft Office, document-generation tooling, GitHub."))
    story.append(paragraph("Methods: Agile and Waterfall delivery, BRD/FSD/RTM documentation, flowcharts, ER and sequence diagrams, user journey mapping."))
    story.append(paragraph("Languages: English, Chinese, Malay."))
    story.append(paragraph("Professional training: Business Analysis, Manual Testing, Software System Testing, Agile Analysis."))

    story += section("Public Portfolio Disclaimer")
    story.append(Paragraph(
        "Portfolio projects use mock data and generalized banking workflows. No confidential client, customer, policy, requirement, screenshot, or production information is published. Confidential or unverified delivery metrics are not published.",
        small_style,
    ))

    doc.build(story)


if __name__ == "__main__":
    target = Path(sys.argv[1]) if len(sys.argv) > 1 else Path("output/pdf/Tan-Ze-Xiang-Resume.pdf")
    build_resume(target)
    print(target)
