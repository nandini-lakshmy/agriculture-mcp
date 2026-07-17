# 🧪 Testing Checklist

## 1. Frontend (Dashboard)

| Test | Expected Result | Status |
|-------|-----------------|--------|
| Dashboard loads | Dashboard opens without errors | ☐ |
| Sensor simulation | Values update correctly | ☐ |
| User input | User can enter soil/location | ☐ |
| Analyze button | Sends request to backend | ☐ |

---

## 2. MCP Server

| Test | Expected Result | Status |
|-------|-----------------|--------|
| Server starts | No startup errors | ☐ |
| Weather Tool | Returns weather data | ☐ |
| Soil Tool | Reads soil information | ☐ |

---

## 3. AI Knowledge Layer

| Test | Expected Result | Status |
|-------|-----------------|--------|
| Prompt execution | AI receives prompt | ☐ |
| Crop recommendation | Suitable crop returned | ☐ |
| Fertilizer recommendation | Fertilizer suggested | ☐ |
| Irrigation advice | Irrigation plan generated | ☐ |

---

## 4. Integration

| Test | Expected Result | Status |
|-------|-----------------|--------|
| Frontend → Backend | Data sent successfully | ☐ |
| Backend → MCP | MCP tools execute | ☐ |
| MCP → AI | AI receives processed data | ☐ |
| AI → Frontend | Recommendation displayed | ☐ |

---

## 5. Error Handling

| Test | Expected Result | Status |
|-------|-----------------|--------|
| Invalid location | Error message shown | ☐ |
| Missing soil values | Validation message | ☐ |
| Weather API unavailable | Graceful fallback | ☐ |

---

## Final Demo Checklist

- [ ] Dashboard opens
- [ ] Weather fetched
- [ ] Soil analyzed
- [ ] Recommendation generated
- [ ] No console errors
- [ ] README updated
- [ ] PPT finalized
- [ ] GitHub repository clean
