/**
 * Desk Chat Widget — shared CDN runtime (all widgets)
 * Requires data-widget-id on the script tag (api base is baked in).
 * field kinds: ["all"]
 */
(function (window, document) {
  "use strict";

  var GLOBAL_FLAG = "__DESK_CHAT_WIDGET_POC__";
  if (window[GLOBAL_FLAG]) return;
  window[GLOBAL_FLAG] = true;

  var SCRIPT_EL = document.currentScript;
  var BAKED = {"key":"","chatWidgetId":"","orgId":"","departmentId":"","apiBaseUrl":"https://test.apis.platform.zealconnect.com/api/desk","title":"Support","tagline":"Usually replies instantly","welcome":"Hi! How can we help?","color":"#065F46","launcherIcon":"chat","position":"bottom-right","captureFields":[],"askFields":[],"needsDate":true,"needsSelect":true,"needsMulti":true,"needsTags":true,"needsRadio":true,"shared":true};
  var LAUNCHER_ICONS = {"chat":"<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"currentColor\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M7.9 20A9 9 0 1 0 4 16.1L2 22Z\"/></svg>","message":"<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z\"/></svg>","headset":"<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z\"/><path d=\"M21 16v2a4 4 0 0 1-4 4h-5\"/></svg>","help":"<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3\"/><path d=\"M12 17h.01\"/></svg>","bot":"<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M12 8V4H8\"/><rect width=\"16\" height=\"12\" x=\"4\" y=\"8\" rx=\"2\"/><path d=\"M2 14h2\"/><path d=\"M20 14h2\"/><path d=\"M15 13v2\"/><path d=\"M9 13v2\"/></svg>","mail":"<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><rect width=\"20\" height=\"16\" x=\"2\" y=\"4\" rx=\"2\"/><path d=\"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7\"/></svg>","phone":"<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\"/></svg>","sparkles":"<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z\"/><path d=\"M20 3v4\"/><path d=\"M22 5h-4\"/><path d=\"M4 17v2\"/><path d=\"M5 18H3\"/></svg>","heart":"<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"currentColor\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z\"/></svg>","smile":"<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M8 14s1.5 2 4 2 4-2 4-2\"/><line x1=\"9\" x2=\"9.01\" y1=\"9\" y2=\"9\"/><line x1=\"15\" x2=\"15.01\" y1=\"9\" y2=\"9\"/></svg>","zap":"<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"currentColor\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z\"/></svg>","lifeBuoy":"<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"m4.93 4.93 4.24 4.24\"/><path d=\"m14.83 9.17 4.24-4.24\"/><path d=\"m14.83 14.83 4.24 4.24\"/><path d=\"m9.17 14.83-4.24 4.24\"/><circle cx=\"12\" cy=\"12\" r=\"4\"/></svg>"};
  var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var PHONE_RE = /^[+]?[\d\s().-]{7,}$/;

  function scriptAttr(name) {
    if (!SCRIPT_EL) return "";
    return String(SCRIPT_EL.getAttribute(name) || "").trim();
  }

  function launcherSvg(iconId) {
    var key = String(iconId || "chat").trim();
    return LAUNCHER_ICONS[key] || LAUNCHER_ICONS.chat || "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"currentColor\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M7.9 20A9 9 0 1 0 4 16.1L2 22Z\"/></svg>";
  }

  function readScriptConfig() {
    var widgetId =
      scriptAttr("data-widget-id") ||
      scriptAttr("data-chat-widget-id") ||
      BAKED.chatWidgetId ||
      BAKED.key ||
      "";
    var apiBase = scriptAttr("data-api-base") || BAKED.apiBaseUrl || "";
    return {
      key: widgetId,
      chatWidgetId: widgetId,
      orgId: scriptAttr("data-org-id") || BAKED.orgId || "",
      departmentId: scriptAttr("data-department-id") || BAKED.departmentId || "",
      apiBaseUrl: String(apiBase).replace(/\/+$/, ""),
      title: scriptAttr("data-title") || BAKED.title,
      tagline: scriptAttr("data-tagline") || BAKED.tagline,
      welcome:
        scriptAttr("data-greeting") ||
        scriptAttr("data-welcome") ||
        BAKED.welcome,
      color: scriptAttr("data-color") || BAKED.color || "#065F46",
      launcherIcon:
        scriptAttr("data-launcher-icon") || BAKED.launcherIcon || "chat",
      position:
        (scriptAttr("data-position") || BAKED.position) === "bottom-left"
          ? "bottom-left"
          : "bottom-right",
      captureFields: BAKED.captureFields || [],
      askFields: BAKED.askFields || [],
    };
  }

  function readUrlQuery() {
    try {
      return new URLSearchParams(window.location.search || "");
    } catch (e) {
      return new URLSearchParams();
    }
  }

  function queryFlagTrue(params, keys) {
    for (var i = 0; i < keys.length; i++) {
      var raw = String(params.get(keys[i]) || "").trim().toLowerCase();
      if (raw === "1" || raw === "true" || raw === "yes" || raw === "open") {
        return true;
      }
    }
    return false;
  }

  function queryFirstValue(params, keys) {
    for (var i = 0; i < keys.length; i++) {
      var raw = String(params.get(keys[i]) || "").trim();
      if (raw) return raw;
    }
    return "";
  }

  /** ~10 years — practical "unlimited" cookie lifetime. */
  var COOKIE_MAX_AGE_SEC = 315360000;

  function setDeskCookie(name, value) {
    try {
      var encoded = encodeURIComponent(String(value == null ? "" : value));
      var cookie =
        encodeURIComponent(name) +
        "=" +
        encoded +
        "; path=/" +
        "; max-age=" +
        COOKIE_MAX_AGE_SEC +
        "; SameSite=Lax";
      if (window.location.protocol === "https:") cookie += "; Secure";
      document.cookie = cookie;
    } catch (e) {}
  }

  function stripDeepLinkQueryParams() {
    try {
      var url = new URL(window.location.href);
      var keys = [
        "chatbotopen",
        "deskCwOpen",
        "desk_cw_open",
        "time",
        "deskCwTime",
        "desk_cw_time",
      ];
      var changed = false;
      for (var i = 0; i < keys.length; i++) {
        if (url.searchParams.has(keys[i])) {
          url.searchParams.delete(keys[i]);
          changed = true;
        }
      }
      if (changed) {
        var next = url.pathname + (url.search ? url.search : "") + url.hash;
        window.history.replaceState({}, "", next);
      }
    } catch (e) {}
  }

  /**
   * Deep link: ?chatbotopen=true&time=1710000000
   * — open chatbot, store time in cookie (long-lived).
   */
  function applyDeepLinkActions(config, setOpenFn) {
    var params = readUrlQuery();
    var shouldOpen =
      queryFlagTrue(params, ["chatbotopen", "deskCwOpen", "desk_cw_open"]) ||
      String(scriptAttr("data-default-open") || "").toLowerCase() === "true" ||
      scriptAttr("data-default-open") === "1";
    var timeValue = queryFirstValue(params, ["time", "deskCwTime", "desk_cw_time"]);
    if (!timeValue && shouldOpen && queryFlagTrue(params, ["chatbotopen", "deskCwOpen", "desk_cw_open"])) {
      timeValue = String(Date.now());
    }
    if (timeValue) {
      var cookieName =
        scriptAttr("data-cookie-name") ||
        "desk_cw_link_time_" + String(config.chatWidgetId || config.key || "default");
      setDeskCookie(cookieName, timeValue);
    }
    if (shouldOpen && typeof setOpenFn === "function") {
      setOpenFn(true);
    }
    if (
      queryFlagTrue(params, ["chatbotopen", "deskCwOpen", "desk_cw_open"]) ||
      queryFirstValue(params, ["time", "deskCwTime", "desk_cw_time"])
    ) {
      stripDeepLinkQueryParams();
    }
  }

  function chatWidgetConfigUrl(config) {
    return config.apiBaseUrl + "/chat-widgets/" + encodeURIComponent(config.chatWidgetId) + "/config";
  }

  function chatWidgetTicketsUrl(config) {
    return config.apiBaseUrl + "/chat-widgets/" + encodeURIComponent(config.chatWidgetId) + "/tickets";
  }

  function normalizeTicketDetails(raw) {
    if (!Array.isArray(raw)) return [];
    return raw.map(function (item) {
      if (!item || typeof item !== "object") return null;
      var id = String(item.id || item.Id || "").trim();
      var fieldRef = String(item.fieldRef || item.FieldRef || "").trim();
      if (!id || !fieldRef) return null;
      var sourceRaw = String(item.source || item.Source || "preset").trim();
      var source =
        sourceRaw === "ask_customer"
          ? "ask_customer"
          : sourceRaw === "embedded_in_ui" || sourceRaw === "embed"
            ? "embedded_in_ui"
            : "preset";
      var optionsRaw = item.options || item.Options || [];
      var options = Array.isArray(optionsRaw)
        ? optionsRaw.map(function (opt) {
            if (!opt || typeof opt !== "object") return null;
            var value = String(opt.value != null ? opt.value : opt.Value != null ? opt.Value : "").trim();
            var label = String(opt.label != null ? opt.label : opt.Label != null ? opt.Label : value).trim();
            if (!value) return null;
            return { value: value, label: label || value };
          }).filter(Boolean)
        : [];
      return {
        id: id,
        fieldRef: fieldRef,
        label: String(item.label || item.Label || "").trim(),
        fieldType: String(item.fieldType || item.FieldType || "").trim(),
        source: source,
        required: Boolean(item.required != null ? item.required : item.Required),
        presetValue: String(item.presetValue != null ? item.presetValue : item.PresetValue != null ? item.PresetValue : ""),
        options: options,
      };
    }).filter(Boolean);
  }

  function fetchChatWidgetConfig(config) {
    if (!config.apiBaseUrl || !config.chatWidgetId) {
      return Promise.resolve(null);
    }
    var url = chatWidgetConfigUrl(config);
    if (config.departmentId) {
      url += (url.indexOf("?") >= 0 ? "&" : "?") + "departmentId=" + encodeURIComponent(config.departmentId);
    }
    var headers = { Accept: "application/json" };
    if (config.orgId) headers["X-Organisation-Id"] = config.orgId;
    if (config.departmentId) headers.DepartmentId = config.departmentId;
    return fetch(url, {
      method: "GET",
      headers: headers,
    }).then(function (res) {
      if (!res.ok) throw new Error("Config request failed");
      return res.json();
    }).then(function (body) {
      var data = body && (body.Data != null ? body.Data : body.data != null ? body.data : body);
      if (!data || typeof data !== "object") return null;
      return {
        title: String(data.Name || data.name || data.Title || data.title || "").trim(),
        welcome: String(data.Greeting || data.greeting || data.WelcomeMessage || data.welcomeMessage || "").trim(),
        tagline: String(data.Tagline || data.tagline || "").trim(),
        color: String(data.PrimaryColor || data.primaryColor || data.Color || data.color || "").trim(),
        launcherIcon: String(data.LauncherIcon || data.launcherIcon || "").trim(),
        position: String(data.Position || data.position || "").trim(),
        ticketDetails: normalizeTicketDetails(data.TicketDetails || data.ticketDetails || []),
        isEnabled: data.IsEnabled != null ? Boolean(data.IsEnabled) : data.isEnabled != null ? Boolean(data.isEnabled) : true,
      };
    }).catch(function () {
      return null;
    });
  }

  function inputKind(field) {
    var type = String((field && field.fieldType) || "").trim();
    var options = (field && field.options) || [];
    var hasOptions = options.length > 0;
    var key = String((field && field.fieldRef) || "")
      .replace(/^FORM_TICKET\./i, "")
      .trim()
      .toLowerCase();
    if (type === "TextSelect") return "textselect";
    if (type === "MultiSelect") {
      if (key === "tags" && !hasOptions) return "textselect";
      return "multiselect";
    }
    if (type === "Radio" || type === "Boolean") return "radio";
    if (hasOptions) return "select";
    if (type === "Dropdown") return "select";
    if (type === "LongText" || type === "Json") return "textarea";
    if (type === "Number" || type === "Decimal") return "number";
    if (type === "Email") return "email";
    if (type === "Phone") return "phone";
    if (type === "Url") return "url";
    if (type === "Date") return "date";
    if (type === "DateTime") return "datetime";
    return "text";
  }

  function fieldLabel(field) {
    if (field && field.label) return String(field.label).trim();
    var ref = String((field && field.fieldRef) || "Field");
    return ref.replace(/^FORM_TICKET\./i, "") || "Field";
  }

  function readAskValue(field) {
    var el = document.querySelector('[data-ask-id="' + field.id + '"]');
    return el ? String(el.value || "").trim() : "";
  }

  /** API answers: MultiSelect / TextSelect as string[]; other fields as string. */
  function serializeAskAnswer(field, value) {
    var kind = inputKind(field);
    var trimmed = String(value == null ? "" : value).trim();
    if (kind === "multiselect" || kind === "textselect") {
      if (!trimmed) return [];
      return trimmed.split(",").map(function (part) {
        return part.trim();
      }).filter(Boolean);
    }
    return trimmed;
  }

  function clearAskValue(field) {
    var wrap = document.querySelector('[data-error-for="' + field.id + '"]');
    var el = document.querySelector('[data-ask-id="' + field.id + '"]');
    if (el) el.value = "";
    if (!wrap) return;
    var face = wrap.querySelector(".desk-cw-dd-face");
    var kind = wrap.querySelector(".desk-cw-dd") && wrap.querySelector(".desk-cw-dd").getAttribute("data-dd-kind");
    if (face) {
      face.classList.add("is-placeholder");
      if (kind === "datetime") face.textContent = "Select date & time";
      else if (kind === "date") face.textContent = "Select date";
      else face.textContent = "Select...";
    }
    var checks = wrap.querySelectorAll(".desk-cw-dd-check");
    for (var i = 0; i < checks.length; i++) checks[i].classList.remove("is-checked");
    var items = wrap.querySelectorAll(".desk-cw-dd-item");
    for (var j = 0; j < items.length; j++) items[j].classList.remove("is-active");
    var chips = wrap.querySelector("[data-tags-chips]");
    if (chips) chips.innerHTML = "";
    var tagsInput = wrap.querySelector("[data-tags-input]");
    if (tagsInput) tagsInput.value = "";
    var radios = wrap.querySelectorAll("[data-radio-option]");
    for (var r = 0; r < radios.length; r++) radios[r].checked = false;
  }

  function validateName(value) {
    var trimmed = String(value || "").trim();
    if (!trimmed) return "Name is required";
    if (trimmed.length < 2) return "Enter a valid name";
    return null;
  }

  function validateEmail(value) {
    var trimmed = String(value || "").trim();
    if (!trimmed) return "Email is required";
    if (!EMAIL_RE.test(trimmed)) return "Enter a valid email";
    return null;
  }

  function validateAsk(field, value) {
    var kind = inputKind(field);
    var trimmed = String(value || "").trim();
    var options = field.options || [];

    if (field.required) {
      if (kind === "multiselect" || kind === "textselect") {
        if (!trimmed) return "This field is required";
      } else if (!trimmed) {
        return "This field is required";
      }
    }
    if (!trimmed) return null;

    if (kind === "email" && !EMAIL_RE.test(trimmed)) return "Enter a valid email";
    if (kind === "phone" && !PHONE_RE.test(trimmed)) return "Enter a valid phone number";
    if (kind === "number" && !isFinite(Number(trimmed))) return "Enter a valid number";
    if (kind === "url") {
      try {
        var candidate = /^https?:\/\//i.test(trimmed) ? trimmed : "https://" + trimmed;
        new URL(candidate);
      } catch (e) {
        return "Enter a valid URL";
      }
    }
    if ((kind === "select" || kind === "multiselect" || kind === "radio") && (options.length || kind === "radio")) {
      var radioOpts = options;
      if (kind === "radio" && !radioOpts.length && String(field.fieldType || "").trim() === "Boolean") {
        radioOpts = [{ value: "true", label: "Yes" }, { value: "false", label: "No" }];
      }
      if (radioOpts.length) {
        var allowed = {};
        for (var i = 0; i < radioOpts.length; i++) allowed[radioOpts[i].value] = true;
        if ((kind === "select" || kind === "radio") && !allowed[trimmed]) return "Select a valid option";
        if (kind === "multiselect") {
          var parts = trimmed.split(",");
          for (var j = 0; j < parts.length; j++) {
            var part = parts[j].trim();
            if (part && !allowed[part]) return "Select valid options";
          }
        }
      }
    }
    return null;
  }

  var DEFAULT_CHAT_ICON = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"currentColor\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M7.9 20A9 9 0 1 0 4 16.1L2 22Z\"/></svg>";
  var CHAT_ICON = DEFAULT_CHAT_ICON;
  var CLOSE_ICON = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';
  var SEND_ICON = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M22 2L11 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  var BACK_ICON = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M19 12H5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M12 19l-7-7 7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  var TICKETS_ICON = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v0z" stroke="currentColor" stroke-width="2"/><path d="M9 12h6M9 16h4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';
  var PLUS_ICON = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/></svg>';

  function css(color, isLeft) {
    return [
      "#desk-cw-root{all:initial;position:fixed;inset:0;pointer-events:none;z-index:2147483000;font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;--desk-cw-accent:" + color + "}",
      /* Form controls don't inherit font by default — match preview / root stack */
      "#desk-cw-root button,#desk-cw-root input,#desk-cw-root select,#desk-cw-root textarea{font-family:inherit}",
      "#desk-cw-shell{position:absolute;inset:0;display:flex;flex-direction:column;justify-content:flex-end;gap:10px;padding:12px;align-items:" + (isLeft ? "flex-start" : "flex-end") + "}",
      "#desk-cw-panel{pointer-events:auto;display:none;width:" + "min(420px, clamp(280px, 25vw, calc(100vw - 24px)))" + ";height:" + "min(640px, clamp(360px, 60vh, calc(100vh - 96px)))" + ";flex-direction:column;overflow:hidden;border-radius:14px;border:1px solid #e2e8f0;background:#fff;box-shadow:0 10px 15px -3px rgb(15 23 42 / .12),0 4px 6px -4px rgb(15 23 42 / .08)}",
      "#desk-cw-panel.open{display:flex}",
      "#desk-cw-header{display:flex;align-items:center;gap:8px;padding:10px 12px;color:#fff;background:" + color + "}",
      "#desk-cw-avatar,#desk-cw-back,#desk-cw-tickets-btn{display:inline-flex;height:28px;width:28px;align-items:center;justify-content:center;border-radius:999px;background:rgb(255 255 255 / .2);font-size:12px;font-weight:600;border:0;color:#fff;cursor:pointer;flex-shrink:0}",
      "#desk-cw-back{display:none}",
      "#desk-cw-header-copy{min-width:0;flex:1}",
      "#desk-cw-title{margin:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:13px;font-weight:600}",
      "#desk-cw-tagline{margin:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:10px;color:rgb(255 255 255 / .8)}",
      "#desk-cw-chat,#desk-cw-ticket,#desk-cw-tickets-list{min-height:0;flex:1;overflow-y:auto}",
      "#desk-cw-chat{background:#f8fafc;padding:10px;display:flex;flex-direction:column;gap:8px}",
      "#desk-cw-ticket,#desk-cw-tickets-list{display:none;background:#fff;padding:12px}",
      "#desk-cw-ticket.open,#desk-cw-tickets-list.open{display:block}",
      "#desk-cw-chat.hidden,#desk-cw-form-wrap.hidden{display:none}",
      ".desk-cw-row{display:flex}.desk-cw-row.user{justify-content:flex-end}.desk-cw-row.bot{justify-content:flex-start}",
      ".desk-cw-bubble{max-width:80%;border-radius:14px;padding:7px 10px;font-size:13px;line-height:1.35;margin:0;word-break:break-word}",
      ".desk-cw-bubble.bot{border-bottom-left-radius:6px;background:#fff;color:#1e293b;box-shadow:0 1px 2px rgb(15 23 42 / .06)}",
      ".desk-cw-bubble.user{border-bottom-right-radius:6px;background:" + color + ";color:#fff}",
      "#desk-cw-raise{align-self:flex-start;cursor:pointer;border:1px solid #e2e8f0;background:#fff;border-radius:10px;padding:7px 10px;font-size:13px;font-weight:500;color:" + color + ";box-shadow:0 1px 2px rgb(15 23 42 / .06)}",
      "#desk-cw-ticket-heading,#desk-cw-tickets-heading{margin:0;font-size:13px;font-weight:600;color:" + color + "}",
      ".desk-cw-tickets-toolbar{display:flex;align-items:center;justify-content:space-between;gap:8px;margin:0 0 12px}",
      "#desk-cw-tickets-new{display:inline-flex;align-items:center;gap:4px;flex-shrink:0;cursor:pointer;border:1px solid #e2e8f0;background:#fff;border-radius:8px;padding:4px 8px;font-size:11px;font-weight:600;color:" + color + "}",
      "#desk-cw-tickets-new:hover{background:#f8fafc}",
      "#desk-cw-tickets-new svg{flex-shrink:0}",
      "#desk-cw-tickets-empty{margin:0;font-size:13px;color:#64748b;line-height:1.4}",
      ".desk-cw-ticket-card{display:block;width:100%;box-sizing:border-box;border:1px solid #e2e8f0;border-radius:12px;padding:10px 12px;margin-bottom:8px;background:#f8fafc;text-align:left;cursor:pointer;font:inherit}",
      ".desk-cw-ticket-card:hover{background:#f1f5f9}",
      ".desk-cw-ticket-card-title{margin:0 0 4px;font-size:13px;font-weight:600;color:#1e293b}",
      ".desk-cw-ticket-card-meta{margin:0;font-size:11px;color:#64748b}",
      ".desk-cw-ticket-card-number{margin:0 0 4px;font-size:11px;font-weight:600;color:" + color + "}",
      ".desk-cw-ticket-detail{border:1px solid #e2e8f0;border-radius:12px;padding:10px 12px;margin-bottom:8px;background:#f8fafc}",
      ".desk-cw-ticket-detail-label{margin:0;font-size:11px;font-weight:600;color:#64748b}",
      ".desk-cw-ticket-detail-value{margin:6px 0 0;font-size:13px;color:#1e293b;white-space:pre-wrap;word-break:break-word}",
      ".desk-cw-field{display:block;margin-bottom:14px}",
      ".desk-cw-field>span{display:block;margin-bottom:6px;font-size:12px;font-weight:500;color:#475569}",
      ".desk-cw-field .req{display:inline;color:#f43f5e}",
      /* Match preview ChatWidget field chrome exactly */
      ".desk-cw-field input,.desk-cw-field select,.desk-cw-field textarea{width:100%;box-sizing:border-box;height:40px;border:1px solid #e2e8f0;border-radius:12px;padding:0 12px;font-family:inherit;font-size:14px;line-height:1.4;outline:none;background:#fff;color:#1e293b;box-shadow:0 1px 2px rgb(15 23 42 / .05);transition:border-color .15s ease,box-shadow .15s ease;cursor:pointer;-webkit-appearance:none;appearance:none}",
      ".desk-cw-field textarea{height:auto;min-height:84px;padding:10px 12px;cursor:text;resize:none;vertical-align:top;field-sizing:fixed}",
      ".desk-cw-field input[type=text],.desk-cw-field input[type=email],.desk-cw-field input[type=tel],.desk-cw-field input[type=url],.desk-cw-field input[type=number]{cursor:text}",
      ".desk-cw-field input::placeholder,.desk-cw-field textarea::placeholder{color:#94a3b8;opacity:1}",
      ".desk-cw-field input:focus,.desk-cw-field input:focus-visible,.desk-cw-field select:focus,.desk-cw-field select:focus-visible,.desk-cw-field textarea:focus,.desk-cw-field textarea:focus-visible,.desk-cw-dd-trigger:focus,.desk-cw-dd-trigger:focus-visible,.desk-cw-dd.is-open .desk-cw-dd-trigger{border-color:#94a3b8;box-shadow:0 1px 2px rgb(15 23 42 / .05)}",
      ".desk-cw-field.invalid input,.desk-cw-field.invalid select,.desk-cw-field.invalid textarea,.desk-cw-field.invalid .desk-cw-dd-trigger{border-color:#fb7185;box-shadow:0 1px 2px rgb(15 23 42 / .05)}",
      ".desk-cw-error{display:none;margin:6px 0 0;font-size:12px;color:#e11d48}",
      ".desk-cw-field.invalid .desk-cw-error{display:block}",
      ".desk-cw-dd{position:relative}.desk-cw-dd-trigger{display:flex;width:100%;box-sizing:border-box;align-items:center;justify-content:space-between;gap:8px;height:40px;border:1px solid #e2e8f0;border-radius:12px;padding:0 12px;background:#fff;color:#1e293b;font-size:14px;line-height:1.4;cursor:pointer;box-shadow:0 1px 2px rgb(15 23 42 / .05);text-align:left;outline:none;transition:border-color .15s ease,box-shadow .15s ease}.desk-cw-dd-face{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.desk-cw-dd-face.is-placeholder{color:#94a3b8}.desk-cw-dd-chevron{color:#94a3b8;flex-shrink:0;font-size:12px}.desk-cw-date-icon{color:#94a3b8;flex-shrink:0}.desk-cw-field.invalid .desk-cw-dd-trigger{border-color:#fb7185}.desk-cw-dd-menu{position:fixed;z-index:2147483646;box-sizing:border-box;max-height:220px;overflow:auto;border:1px solid #e2e8f0;border-radius:12px;background:#fff;box-shadow:0 12px 24px rgb(15 23 42 / .16);padding:4px}.desk-cw-dd-item,.desk-cw-dd-check{display:flex;width:100%;box-sizing:border-box;align-items:center;gap:8px;border:0;background:transparent;border-radius:8px;padding:8px 12px;font-size:14px;color:#334155;cursor:pointer;text-align:left}.desk-cw-dd-item:hover,.desk-cw-dd-check:hover{background:#f1f5f9}.desk-cw-dd-item.is-active{color:#fff;background:var(--desk-cw-accent)}.desk-cw-dd-box{display:inline-flex;width:16px;height:16px;flex-shrink:0;align-items:center;justify-content:center;border:1px solid #cbd5e1;border-radius:4px;background:#fff;font-size:10px;color:#fff}.desk-cw-dd-check.is-checked .desk-cw-dd-box{border-color:transparent;background:var(--desk-cw-accent)}.desk-cw-dd-check.is-checked .desk-cw-dd-box:after{content:\"✓\"}.desk-cw-empty{margin:0;padding:8px 12px;font-size:12px;color:#94a3b8}.desk-cw-date-menu{width:280px;max-height:none;overflow:hidden;padding:12px}.desk-cw-cal-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:10px}.desk-cw-cal-title{margin:0;font-size:14px;font-weight:600;color:#1e293b}.desk-cw-cal-nav{display:inline-flex;width:32px;height:32px;align-items:center;justify-content:center;border:0;border-radius:999px;background:transparent;color:#64748b;cursor:pointer}.desk-cw-cal-nav:hover{background:#f1f5f9}.desk-cw-cal-grid{display:grid;grid-template-columns:repeat(7,1fr);gap:2px 0}.desk-cw-cal-dow{padding:6px 0;text-align:center;font-size:11px;font-weight:500;color:#94a3b8}.desk-cw-cal-day{display:inline-flex;width:32px;height:32px;margin:0 auto;align-items:center;justify-content:center;border:0;border-radius:999px;background:transparent;color:#334155;font-size:13px;cursor:pointer}.desk-cw-cal-day:hover{background:#f1f5f9}.desk-cw-cal-day.is-active{color:#fff;background:var(--desk-cw-accent);font-weight:600}.desk-cw-cal-day.is-today:not(.is-active){box-shadow:inset 0 0 0 1px #cbd5e1}.desk-cw-time-row{display:flex;align-items:center;justify-content:space-between;gap:8px;margin-top:12px;padding:8px 10px;border-radius:16px;background:#f8fafc}.desk-cw-time-label{font-size:12px;font-weight:500;color:#64748b}.desk-cw-time-controls{display:flex;align-items:center;gap:4px}.desk-cw-time-group{display:flex;align-items:center;border:1px solid #e2e8f0;border-radius:12px;background:#fff}.desk-cw-time-btn{display:inline-flex;width:28px;height:32px;align-items:center;justify-content:center;border:0;background:transparent;color:#64748b;cursor:pointer}.desk-cw-time-btn:hover{background:#f8fafc}.desk-cw-time-val{width:28px;text-align:center;font-size:13px;font-weight:600;color:#1e293b}.desk-cw-cal-foot{display:flex;align-items:center;justify-content:space-between;margin-top:12px}.desk-cw-cal-link{border:0;background:transparent;padding:6px 8px;border-radius:8px;font-size:12px;font-weight:500;color:#64748b;cursor:pointer}.desk-cw-cal-link:hover{background:#f1f5f9;color:#1e293b}.desk-cw-cal-done{border:0;border-radius:8px;padding:6px 12px;font-size:12px;font-weight:600;color:#fff;background:var(--desk-cw-accent);cursor:pointer}.desk-cw-tags{position:relative}.desk-cw-tags-box{display:flex;width:100%;box-sizing:border-box;min-height:40px;flex-wrap:wrap;align-items:center;gap:6px;border:1px solid #e2e8f0;border-radius:12px;padding:6px 8px;background:#fff;box-shadow:0 1px 2px rgb(15 23 42 / .05);cursor:text}.desk-cw-field.invalid .desk-cw-tags-box{border-color:#fb7185}.desk-cw-tags-box.is-focus{border-color:#94a3b8}.desk-cw-tags-chips{display:contents}.desk-cw-tag-chip{display:inline-flex;max-width:100%;align-items:center;gap:4px;border-radius:8px;padding:2px 8px;font-size:12px;font-weight:500;color:#fff;background:var(--desk-cw-accent)}.desk-cw-tag-chip span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.desk-cw-tag-x{display:inline-flex;width:14px;height:14px;align-items:center;justify-content:center;border:0;border-radius:999px;background:rgb(255 255 255 / .2);color:#fff;font-size:11px;line-height:1;cursor:pointer;padding:0}.desk-cw-tags-input{min-width:7rem;flex:1;border:0;outline:none;background:transparent;font-family:inherit;font-size:14px;line-height:1.4;color:#1e293b;padding:2px 4px}.desk-cw-tags-input::placeholder{color:#94a3b8}.desk-cw-tags-menu{position:fixed;z-index:2147483646;box-sizing:border-box;max-height:220px;overflow:auto;border:1px solid #e2e8f0;border-radius:12px;background:#fff;box-shadow:0 12px 24px rgb(15 23 42 / .16);padding:4px}.desk-cw-tags-item{display:flex;width:100%;box-sizing:border-box;border:0;background:transparent;border-radius:8px;padding:8px 12px;font-size:14px;color:#334155;cursor:pointer;text-align:left}.desk-cw-tags-item:hover{background:#f1f5f9}.desk-cw-tags-item.is-hidden{display:none}.desk-cw-radio{display:flex;flex-direction:column;gap:8px;box-sizing:border-box;border:1px solid #e2e8f0;border-radius:12px;padding:10px 12px;background:#fff;box-shadow:0 1px 2px rgb(15 23 42 / .05)}.desk-cw-field.invalid .desk-cw-radio{border-color:#fb7185}.desk-cw-radio-option{position:relative;display:flex;align-items:center;gap:10px;font-size:14px;color:#334155;cursor:pointer}.desk-cw-radio-option input{position:absolute;opacity:0;width:1px;height:1px;margin:0;overflow:hidden;clip:rect(0,0,0,0)}.desk-cw-radio-dot{display:inline-flex;width:16px;height:16px;flex-shrink:0;box-sizing:border-box;border:1px solid #cbd5e1;border-radius:999px;background:#fff}.desk-cw-radio-option input:checked + .desk-cw-radio-dot{border-color:transparent;background:var(--desk-cw-accent);box-shadow:inset 0 0 0 3px #fff}.desk-cw-radio .desk-cw-empty{margin:0;padding:0;font-size:12px;color:#94a3b8}.desk-cw-field textarea{min-height:84px;resize:none}",
      "#desk-cw-submit{width:100%;margin-top:8px;cursor:pointer;border:0;border-radius:12px;padding:10px 12px;font-size:14px;font-weight:600;color:#fff;background:" + color + ";box-shadow:0 4px 10px " + color + "40}",
      "#desk-cw-submit:hover{filter:brightness(1.05)}",
      "#desk-cw-back,#desk-cw-send,#desk-cw-launcher,#desk-cw-tickets-btn,#desk-cw-tickets-new{cursor:pointer}",
      "#desk-cw-form-wrap{display:flex;align-items:center;gap:8px;border-top:1px solid #e2e8f0;background:#fff;padding:8px}",
      "#desk-cw-input{min-width:0;flex:1;height:36px;border:1px solid #e2e8f0;border-radius:12px;padding:0 12px;font-family:inherit;font-size:14px;line-height:1.4;outline:none;cursor:text;box-shadow:0 1px 2px rgb(15 23 42 / .05);background:#fff;color:#1e293b}",
      "#desk-cw-input:focus,#desk-cw-input:focus-visible{border-color:#94a3b8;box-shadow:0 1px 2px rgb(15 23 42 / .05)}",
      "#desk-cw-send{display:inline-flex;height:36px;width:36px;align-items:center;justify-content:center;border:0;border-radius:12px;background:" + color + ";color:#fff;cursor:pointer}",
      "#desk-cw-launcher{pointer-events:auto;display:inline-flex;height:" + "48px" + ";width:" + "48px" + ";align-items:center;justify-content:center;border:0;border-radius:999px;background:" + color + ";color:#fff;box-shadow:0 10px 15px -3px rgb(15 23 42 / .2),0 4px 6px -4px rgb(15 23 42 / .12);transition:transform .15s ease}",
      "#desk-cw-launcher:hover{transform:scale(1.05)}",
    ].join("");
  }

  function mount(config) {
    if (document.getElementById("desk-cw-root")) return;
    CHAT_ICON = launcherSvg(config.launcherIcon || BAKED.launcherIcon);

    var style = document.createElement("style");
    style.id = "desk-cw-style";
    style.textContent = css(config.color, config.position === "bottom-left");
    document.head.appendChild(style);

    var askFields = config.askFields || [];
    var presetFields = (config.captureFields || []).filter(function (field) {
      return field && field.source === "preset" && field.fieldRef;
    });
    var embedFields = (config.captureFields || []).filter(function (field) {
      return field && (field.source === "embedded_in_ui" || field.source === "embed") && field.fieldRef;
    });

    function fieldKeyFromRef(fieldRef) {
      return String(fieldRef || "")
        .replace(/^FORM_TICKET\./i, "")
        .trim();
    }

    function fieldKeyToDataAttr(fieldKey) {
      var kebab = String(fieldKey || "")
        .trim()
        .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
        .replace(/[_\s.]+/g, "-")
        .replace(/[^a-zA-Z0-9-]/g, "")
        .replace(/-+/g, "-")
        .replace(/^-|-$/g, "")
        .toLowerCase();
      return "data-" + (kebab || "field");
    }

    function readEmbedFieldValue(field) {
      if (!SCRIPT_EL || !field) return "";
      var key = fieldKeyFromRef(field.fieldRef);
      return String(SCRIPT_EL.getAttribute(fieldKeyToDataAttr(key)) || "").trim();
    }

    var root = document.createElement("div");
    root.id = "desk-cw-root";
    root.innerHTML =
      '<div id="desk-cw-shell">' +
      '<div id="desk-cw-panel" aria-hidden="true">' +
      '<header id="desk-cw-header">' +
      '<button type="button" id="desk-cw-back" aria-label="Back">' + BACK_ICON + "</button>" +
      '<span id="desk-cw-avatar"></span>' +
      '<div id="desk-cw-header-copy"><p id="desk-cw-title"></p><p id="desk-cw-tagline"></p></div>' +
      '<button type="button" id="desk-cw-tickets-btn" aria-label="My tickets" title="My tickets">' + TICKETS_ICON + "</button>" +
      "</header>" +
      '<div id="desk-cw-chat"></div>' +
      '<div id="desk-cw-tickets-list">' +
      '<div class="desk-cw-tickets-toolbar">' +
      '<p id="desk-cw-tickets-heading">Your tickets</p>' +
      '<button type="button" id="desk-cw-tickets-new">' + PLUS_ICON + "Add new</button>" +
      "</div>" +
      '<div id="desk-cw-tickets-items"></div>' +
      "</div>" +
      '<div id="desk-cw-ticket">' +
      '<p id="desk-cw-ticket-heading">Raise a request</p>' +
      '<label class="desk-cw-field" data-error-for="name"><span>Name <span class="req">*</span></span><input id="desk-cw-name" type="text" name="name" autocomplete="name" placeholder="e.g. Aditi Sharma" /><p class="desk-cw-error" data-error-msg="name" hidden></p></label>' +
      '<label class="desk-cw-field" data-error-for="email"><span>Email <span class="req">*</span></span><input id="desk-cw-email" type="email" name="email" autocomplete="email" placeholder="you@example.com" /><p class="desk-cw-error" data-error-msg="email" hidden></p></label>' +
      '<div id="desk-cw-ask-fields">' + "" + '</div>' +
      '<p id="desk-cw-submit-status" class="desk-cw-error" hidden style="display:none;margin:0 0 8px"></p>' +
      '<button type="button" id="desk-cw-submit">Submit request</button>' +
      "</div>" +
      '<form id="desk-cw-form-wrap">' +
      '<input id="desk-cw-input" type="text" placeholder="Type a message..." autocomplete="off" />' +
      '<button type="submit" id="desk-cw-send" aria-label="Send">' + SEND_ICON + "</button>" +
      "</form></div>" +
      '<button type="button" id="desk-cw-launcher" aria-label="Open chat" aria-expanded="false">' + CHAT_ICON + "</button>" +
      "</div>";

    document.body.appendChild(root);

    var panel = document.getElementById("desk-cw-panel");
    var launcher = document.getElementById("desk-cw-launcher");
    var backBtn = document.getElementById("desk-cw-back");
    var ticketsBtn = document.getElementById("desk-cw-tickets-btn");
    var avatar = document.getElementById("desk-cw-avatar");
    var chatEl = document.getElementById("desk-cw-chat");
    var ticketEl = document.getElementById("desk-cw-ticket");
    var ticketsListEl = document.getElementById("desk-cw-tickets-list");
    var ticketsItemsEl = document.getElementById("desk-cw-tickets-items");
    var formWrap = document.getElementById("desk-cw-form-wrap");
    var input = document.getElementById("desk-cw-input");
    var nameInput = document.getElementById("desk-cw-name");
    var emailInput = document.getElementById("desk-cw-email");
    var submitBtn = document.getElementById("desk-cw-submit");
    var raiseBtn = null;
    var open = false;
    var view = "chat";
    var selectedTicketId = null;
    var storagePrefix = "desk_cw_" + String(config.key || "default").trim();
    var identityKey = storagePrefix + "_identity";
    var chatHistoryKey = storagePrefix + "_chat";
    var ticketsKey = storagePrefix + "_tickets";
    var MAX_CHAT_MESSAGES = 50;
    var MAX_STORED_TICKETS = 20;
    var ticketsHeadingEl = document.getElementById("desk-cw-tickets-heading");
    var ticketsNewBtn = document.getElementById("desk-cw-tickets-new");

    function loadVisitorIdentity() {
      try {
        var raw = window.localStorage.getItem(identityKey);
        if (!raw) return;
        var parsed = JSON.parse(raw);
        if (!parsed || typeof parsed !== "object") return;
        var savedName = String(parsed.name || "").trim();
        var savedEmail = String(parsed.email || "").trim();
        if (savedName) nameInput.value = savedName;
        if (savedEmail) emailInput.value = savedEmail;
      } catch (e) {}
    }

    function saveVisitorIdentity(name, email) {
      try {
        var nextName = String(name || "").trim();
        var nextEmail = String(email || "").trim();
        if (!nextName && !nextEmail) {
          window.localStorage.removeItem(identityKey);
          return;
        }
        window.localStorage.setItem(
          identityKey,
          JSON.stringify({
            name: nextName,
            email: nextEmail,
          }),
        );
      } catch (e) {}
    }

    function persistIdentityFromInputs() {
      saveVisitorIdentity(nameInput.value, emailInput.value);
    }

    loadVisitorIdentity();
    nameInput.addEventListener("input", persistIdentityFromInputs);
    nameInput.addEventListener("change", persistIdentityFromInputs);
    emailInput.addEventListener("input", persistIdentityFromInputs);
    emailInput.addEventListener("change", persistIdentityFromInputs);

    document.getElementById("desk-cw-title").textContent = config.title;
    document.getElementById("desk-cw-tagline").textContent = config.tagline;
    avatar.textContent = (config.title.slice(0, 1) || "S").toUpperCase();

    function readJsonStorage(key, fallback) {
      try {
        var raw = window.localStorage.getItem(key);
        if (!raw) return fallback;
        var parsed = JSON.parse(raw);
        return parsed == null ? fallback : parsed;
      } catch (e) {
        return fallback;
      }
    }

    function writeJsonStorage(key, value) {
      try {
        window.localStorage.setItem(key, JSON.stringify(value));
      } catch (e) {}
    }

    function loadChatHistory() {
      var list = readJsonStorage(chatHistoryKey, []);
      return Array.isArray(list) ? list : [];
    }

    function saveChatHistory(messages) {
      var next = Array.isArray(messages) ? messages.slice(-MAX_CHAT_MESSAGES) : [];
      writeJsonStorage(chatHistoryKey, next);
    }

    function appendChatHistory(role, text) {
      var messages = loadChatHistory();
      messages.push({
        role: role,
        text: String(text || ""),
        at: new Date().toISOString(),
      });
      saveChatHistory(messages);
    }

    function loadCreatedTickets() {
      var list = readJsonStorage(ticketsKey, []);
      return Array.isArray(list) ? list : [];
    }

    function rememberCreatedTicket(ticket) {
      if (!ticket || !ticket.ticketId) return;
      var list = loadCreatedTickets().filter(function (item) {
        return item && item.ticketId !== ticket.ticketId;
      });
      var details = Array.isArray(ticket.details)
        ? ticket.details
            .map(function (detail) {
              if (!detail || typeof detail !== "object") return null;
              var label = String(detail.label || "").trim();
              var value = String(detail.value || "").trim();
              if (!label || !value) return null;
              return { label: label, value: value };
            })
            .filter(Boolean)
        : [];
      list.unshift({
        ticketId: String(ticket.ticketId),
        ticketNumber: ticket.ticketNumber ? String(ticket.ticketNumber) : "",
        subject: ticket.subject ? String(ticket.subject) : "",
        createdAt: ticket.createdAt || new Date().toISOString(),
        details: details,
      });
      writeJsonStorage(ticketsKey, list.slice(0, MAX_STORED_TICKETS));
    }

    function formatTicketWhen(iso) {
      if (!iso) return "";
      try {
        var date = new Date(iso);
        if (Number.isNaN(date.getTime())) return "";
        return date.toLocaleString();
      } catch (e) {
        return "";
      }
    }

    function formatTicketNumber(ticketNumber) {
      var raw = String(ticketNumber || "").trim();
      if (!raw) return "";
      return raw.charAt(0) === "#" ? raw : "#" + raw;
    }

    function findCreatedTicket(ticketId) {
      var id = String(ticketId || "").trim();
      if (!id) return null;
      var list = loadCreatedTickets();
      for (var i = 0; i < list.length; i++) {
        if (list[i] && String(list[i].ticketId) === id) return list[i];
      }
      return null;
    }

    function renderTicketsList() {
      if (!ticketsItemsEl) return;
      if (ticketsHeadingEl) ticketsHeadingEl.textContent = "Your tickets";
      if (ticketsNewBtn) ticketsNewBtn.style.display = "inline-flex";
      var list = loadCreatedTickets();
      if (!list.length) {
        ticketsItemsEl.innerHTML =
          '<p id="desk-cw-tickets-empty">No tickets yet. Send a message, then raise a request to create one.</p>';
        return;
      }
      ticketsItemsEl.innerHTML = list
        .map(function (item) {
          var subject = item.subject || "Support request";
          var when = formatTicketWhen(item.createdAt);
          var numberLabel = formatTicketNumber(item.ticketNumber);
          return (
            '<button type="button" class="desk-cw-ticket-card" data-ticket-id="' +
            escapeHtmlLive(String(item.ticketId || "")) +
            '">' +
            (numberLabel
              ? '<p class="desk-cw-ticket-card-number">' +
                escapeHtmlLive(numberLabel) +
                "</p>"
              : "") +
            '<p class="desk-cw-ticket-card-title">' +
            escapeHtmlLive(subject) +
            "</p>" +
            (when
              ? '<p class="desk-cw-ticket-card-meta">' +
                escapeHtmlLive(when) +
                "</p>"
              : "") +
            "</button>"
          );
        })
        .join("");
      var cards = ticketsItemsEl.querySelectorAll("[data-ticket-id]");
      for (var c = 0; c < cards.length; c++) {
        cards[c].addEventListener("click", function (event) {
          var id = String(event.currentTarget.getAttribute("data-ticket-id") || "").trim();
          if (!id) return;
          selectedTicketId = id;
          setView("ticket-detail");
        });
      }
    }

    function renderTicketDetail(ticketId) {
      if (!ticketsItemsEl) return;
      var ticket = findCreatedTicket(ticketId);
      if (ticketsHeadingEl) {
        ticketsHeadingEl.textContent =
          (ticket && ticket.subject) || "Ticket details";
      }
      if (ticketsNewBtn) ticketsNewBtn.style.display = "inline-flex";
      if (!ticket) {
        ticketsItemsEl.innerHTML =
          '<p id="desk-cw-tickets-empty">Ticket details are not available.</p>';
        return;
      }
      var details = Array.isArray(ticket.details) ? ticket.details : [];
      var numberLabel = formatTicketNumber(ticket.ticketNumber);
      var html = "";
      if (numberLabel) {
        html +=
          '<div class="desk-cw-ticket-detail">' +
          '<p class="desk-cw-ticket-detail-label">Ticket number</p>' +
          '<p class="desk-cw-ticket-detail-value">' +
          escapeHtmlLive(numberLabel) +
          "</p></div>";
      }
      if (!details.length && !numberLabel) {
        ticketsItemsEl.innerHTML =
          '<p id="desk-cw-tickets-empty">No details saved for this ticket.</p>';
        return;
      }
      html += details
        .map(function (detail) {
          return (
            '<div class="desk-cw-ticket-detail">' +
            '<p class="desk-cw-ticket-detail-label">' +
            escapeHtmlLive(String(detail.label || "")) +
            "</p>" +
            '<p class="desk-cw-ticket-detail-value">' +
            escapeHtmlLive(String(detail.value || "")) +
            "</p></div>"
          );
        })
        .join("");
      ticketsItemsEl.innerHTML = html;
    }

    function scrollChatToBottom() {
      // Double rAF: panel may have just become display:flex — wait for layout.
      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          chatEl.scrollTop = chatEl.scrollHeight;
        });
      });
    }

    function addBubble(role, text, options) {
      var skipPersist = options && options.skipPersist;
      var row = document.createElement("div");
      row.className = "desk-cw-row " + role;
      var bubble = document.createElement("p");
      bubble.className = "desk-cw-bubble " + role;
      bubble.textContent = text;
      row.appendChild(bubble);
      chatEl.appendChild(row);
      // Keep Raise CTA after the latest message.
      if (raiseBtn && raiseBtn.parentNode) chatEl.appendChild(raiseBtn);
      scrollChatToBottom();
      if (!skipPersist) appendChatHistory(role, text);
    }

    function ensureRaiseButton() {
      if (!raiseBtn || !raiseBtn.parentNode) {
        raiseBtn = document.createElement("button");
        raiseBtn.type = "button";
        raiseBtn.id = "desk-cw-raise";
        raiseBtn.textContent = "Raise a request";
        raiseBtn.addEventListener("click", function () { setView("ticket"); });
      }
      chatEl.appendChild(raiseBtn);
      scrollChatToBottom();
    }

    function removeRaiseButton() {
      if (raiseBtn && raiseBtn.parentNode) raiseBtn.parentNode.removeChild(raiseBtn);
      raiseBtn = null;
    }

    function setView(next) {
      view = next;
      var isTicket = view === "ticket";
      var isTicketsList = view === "tickets";
      var isTicketDetail = view === "ticket-detail";
      ticketEl.classList.toggle("open", isTicket);
      if (ticketsListEl) ticketsListEl.classList.toggle("open", isTicketsList || isTicketDetail);
      chatEl.classList.toggle("hidden", isTicket || isTicketsList || isTicketDetail);
      formWrap.classList.toggle("hidden", isTicket || isTicketsList || isTicketDetail);
      backBtn.style.display = isTicket || isTicketsList || isTicketDetail ? "inline-flex" : "none";
      avatar.style.display = isTicket || isTicketsList || isTicketDetail ? "none" : "inline-flex";
      if (ticketsBtn) {
        ticketsBtn.style.display = isTicket || isTicketsList || isTicketDetail ? "none" : "inline-flex";
      }
      if (isTicket) {
        loadVisitorIdentity();
        refreshTicketFormFromConfig();
      }
      if (isTicketsList) {
        selectedTicketId = null;
        renderTicketsList();
      }
      if (isTicketDetail) {
        renderTicketDetail(selectedTicketId);
      }
      if (!isTicket && !isTicketsList && !isTicketDetail) {
        scrollChatToBottom();
      }
    }

    function escapeHtmlLive(value) {
      return String(value == null ? "" : value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
    }

    function buildAskFieldHtmlLive(field) {
      var kind = inputKind(field);
      var id = escapeHtmlLive(field.id);
      var label = escapeHtmlLive(fieldLabel(field));
      var req = field.required ? ' <span class="req">*</span>' : "";
      var options = field.options || [];
      if (kind === "textarea") {
        return '<label class="desk-cw-field" data-error-for="' + id + '"><span>' + label + req + '</span><textarea data-ask-id="' + id + '" rows="3" placeholder="Enter value"></textarea><p class="desk-cw-error" data-error-msg="' + id + '" hidden></p></label>';
      }
      if (kind === "select") {
        var items = '<button type="button" class="desk-cw-dd-item" data-dd-option="" data-dd-label="Select...">Select...</button>';
        for (var i = 0; i < options.length; i++) {
          items += '<button type="button" class="desk-cw-dd-item" data-dd-option="' + escapeHtmlLive(options[i].value) + '" data-dd-label="' + escapeHtmlLive(options[i].label) + '">' + escapeHtmlLive(options[i].label) + '</button>';
        }
        return '<div class="desk-cw-field" data-error-for="' + id + '"><span>' + label + req + '</span><div class="desk-cw-dd" data-dd-kind="select"><button type="button" class="desk-cw-dd-trigger" data-dd-trigger><span class="desk-cw-dd-face is-placeholder">Select...</span><span class="desk-cw-dd-chevron">▾</span></button><input type="hidden" data-ask-id="' + id + '" value="" /><div class="desk-cw-dd-menu" data-dd-menu hidden>' + items + '</div></div><p class="desk-cw-error" data-error-msg="' + id + '" hidden></p></div>';
      }
      if (kind === "multiselect") {
        var multiItems = options.length === 0 ? '<p class="desk-cw-empty">No options configured</p>' : options.map(function (option) {
          return '<button type="button" class="desk-cw-dd-check" data-dd-check="' + escapeHtmlLive(option.value) + '" data-dd-label="' + escapeHtmlLive(option.label) + '"><span class="desk-cw-dd-box" aria-hidden="true"></span><span>' + escapeHtmlLive(option.label) + '</span></button>';
        }).join("");
        return '<div class="desk-cw-field" data-error-for="' + id + '"><span>' + label + req + '</span><div class="desk-cw-dd" data-dd-kind="multi"><button type="button" class="desk-cw-dd-trigger" data-dd-trigger><span class="desk-cw-dd-face is-placeholder">Select...</span><span class="desk-cw-dd-chevron">▾</span></button><input type="hidden" data-ask-id="' + id + '" value="" /><div class="desk-cw-dd-menu" data-dd-menu hidden>' + multiItems + '</div></div><p class="desk-cw-error" data-error-msg="' + id + '" hidden></p></div>';
      }
      if (kind === "textselect") {
        var tagItems = options.map(function (option) {
          return '<button type="button" class="desk-cw-tags-item" data-tags-option="' + escapeHtmlLive(option.value) + '" data-tags-label="' + escapeHtmlLive(option.label) + '">' + escapeHtmlLive(option.label) + '</button>';
        }).join("");
        return '<div class="desk-cw-field" data-error-for="' + id + '"><span>' + label + req + '</span><div class="desk-cw-tags" data-tags-root><div class="desk-cw-tags-box" data-tags-box><div class="desk-cw-tags-chips" data-tags-chips></div><input type="text" class="desk-cw-tags-input" data-tags-input placeholder="Add…" autocomplete="off" /></div><input type="hidden" data-ask-id="' + id + '" value="" /><div class="desk-cw-tags-menu" data-tags-menu hidden>' + tagItems + '</div></div><p class="desk-cw-error" data-error-msg="' + id + '" hidden></p></div>';
      }
      if (kind === "radio") {
        var radioOpts = options.length ? options : (String(field.fieldType || "") === "Boolean" ? [{ value: "true", label: "Yes" }, { value: "false", label: "No" }] : []);
        var radioItems = radioOpts.length === 0 ? '<p class="desk-cw-empty">No options configured</p>' : radioOpts.map(function (option) {
          return '<label class="desk-cw-radio-option"><input type="radio" name="desk-cw-radio-' + id + '" value="' + escapeHtmlLive(option.value) + '" data-radio-option /><span class="desk-cw-radio-dot" aria-hidden="true"></span><span>' + escapeHtmlLive(option.label) + '</span></label>';
        }).join("");
        return '<div class="desk-cw-field" data-error-for="' + id + '"><span>' + label + req + '</span><div class="desk-cw-radio" data-radio-root role="radiogroup"><input type="hidden" data-ask-id="' + id + '" value="" />' + radioItems + '</div><p class="desk-cw-error" data-error-msg="' + id + '" hidden></p></div>';
      }
      if (kind === "date" || kind === "datetime") {
        var placeholder = kind === "datetime" ? "Select date & time" : "Select date";
        return '<div class="desk-cw-field" data-error-for="' + id + '"><span>' + label + req + '</span><div class="desk-cw-dd" data-dd-kind="' + kind + '"><button type="button" class="desk-cw-dd-trigger" data-dd-trigger><span class="desk-cw-dd-face is-placeholder">' + placeholder + '</span><svg class="desk-cw-date-icon" width="16" height="16" viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" stroke-width="2"/><path d="M3 10h18M8 3v4M16 3v4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></button><input type="hidden" data-ask-id="' + id + '" value="" /><div class="desk-cw-dd-menu desk-cw-date-menu" data-dd-menu hidden></div></div><p class="desk-cw-error" data-error-msg="' + id + '" hidden></p></div>';
      }
      var typeAttr = kind === "number" ? "number" : kind === "email" ? "email" : kind === "phone" ? "tel" : kind === "url" ? "url" : "text";
      return '<label class="desk-cw-field" data-error-for="' + id + '"><span>' + label + req + '</span><input data-ask-id="' + id + '" type="' + typeAttr + '" placeholder="Enter value" /><p class="desk-cw-error" data-error-msg="' + id + '" hidden></p></label>';
    }

    function renderAskFields(fields) {
      var wrap = document.getElementById("desk-cw-ask-fields");
      if (!wrap) return;
      wrap.innerHTML = (fields || []).map(buildAskFieldHtmlLive).join("");
      if (typeof window.__deskCwWireAskControls === "function") {
        window.__deskCwWireAskControls();
      }
    }

    var configLoaded = false;
    function refreshTicketFormFromConfig() {
      if (!config.apiBaseUrl || !config.chatWidgetId) return;
      var statusEl = document.getElementById("desk-cw-submit-status");
      if (statusEl) {
        statusEl.hidden = true;
        statusEl.style.display = "none";
        statusEl.textContent = "";
      }
      fetchChatWidgetConfig(config).then(function (live) {
        if (!live) return;
        configLoaded = true;
        if (live.title) {
          document.getElementById("desk-cw-title").textContent = live.title;
          avatar.textContent = (live.title.slice(0, 1) || "S").toUpperCase();
        }
        if (live.welcome) config.welcome = live.welcome;
        var details = live.ticketDetails || [];
        askFields = details.filter(function (field) { return field.source === "ask_customer"; });
        presetFields = details.filter(function (field) { return field.source === "preset" && field.fieldRef; });
        embedFields = details.filter(function (field) {
          return (field.source === "embedded_in_ui" || field.source === "embed") && field.fieldRef;
        });
        renderAskFields(askFields);
      });
    }

    function setOpen(next) {
      open = next;
      panel.classList.toggle("open", open);
      panel.setAttribute("aria-hidden", open ? "false" : "true");
      launcher.setAttribute("aria-expanded", open ? "true" : "false");
      launcher.setAttribute("aria-label", open ? "Close chat" : "Open chat");
      launcher.innerHTML = open ? CLOSE_ICON : CHAT_ICON;
      if (open) {
        scrollChatToBottom();
      } else {
        setView("chat");
      }
    }

    function restoreChatFromStorage() {
      var history = loadChatHistory();
      if (history.length) {
        for (var i = 0; i < history.length; i++) {
          var item = history[i];
          if (!item || (item.role !== "user" && item.role !== "bot")) continue;
          addBubble(item.role, String(item.text || ""), { skipPersist: true });
        }
      } else {
        addBubble("bot", config.welcome);
      }
      ensureRaiseButton();
    }

    restoreChatFromStorage();
    if (askFields && askFields.length) {
      renderAskFields(askFields);
    } else if (BAKED.shared) {
      refreshTicketFormFromConfig();
    }

    launcher.addEventListener("click", function () { setOpen(!open); });
    backBtn.addEventListener("click", function () {
      if (view === "ticket-detail") setView("tickets");
      else setView("chat");
    });
    if (ticketsBtn) {
      ticketsBtn.addEventListener("click", function () { setView("tickets"); });
    }
    if (ticketsNewBtn) {
      ticketsNewBtn.addEventListener("click", function () {
        selectedTicketId = null;
        setView("ticket");
      });
    }

    // Deep-link after UI is wired: ?chatbotopen=true&time=…
    applyDeepLinkActions(config, setOpen);

    formWrap.addEventListener("submit", function (event) {
      event.preventDefault();
      var text = (input.value || "").trim();
      if (!text) return;
      addBubble("user", text);
      input.value = "";
      ensureRaiseButton();
    });

    function setFieldError(key, message) {
      var wrap = document.querySelector('[data-error-for="' + key + '"]');
      var msg = document.querySelector('[data-error-msg="' + key + '"]');
      if (wrap) wrap.classList.toggle("invalid", Boolean(message));
      if (msg) {
        msg.textContent = message || "";
        if (message) msg.removeAttribute("hidden");
        else msg.setAttribute("hidden", "hidden");
      }
    }

    function clearAllErrors() {
      setFieldError("name", "");
      setFieldError("email", "");
      for (var i = 0; i < askFields.length; i++) setFieldError(askFields[i].id, "");
    }

    function bindClearError(el, key) {
      if (!el) return;
      el.addEventListener("input", function () { setFieldError(key, ""); });
      el.addEventListener("change", function () { setFieldError(key, ""); });
    }

    bindClearError(nameInput, "name");
    bindClearError(emailInput, "email");
    for (var bi = 0; bi < askFields.length; bi++) {
      var nodes = document.querySelectorAll('[data-ask-id="' + askFields[bi].id + '"]');
      for (var bj = 0; bj < nodes.length; bj++) bindClearError(nodes[bj], askFields[bi].id);
    }

    function syncMultiFace(root) {
      var face = root.querySelector(".desk-cw-dd-face");
      var hidden = root.querySelector("[data-ask-id]");
      if (!face || !hidden) return;
      var values = String(hidden.value || "").split(",").map(function (v) { return v.trim(); }).filter(Boolean);
      if (!values.length) {
        face.classList.add("is-placeholder");
        face.textContent = "Select...";
        return;
      }
      var labels = [];
      var checks = root.querySelectorAll(".desk-cw-dd-check");
      for (var i = 0; i < checks.length; i++) {
        var val = checks[i].getAttribute("data-dd-check") || "";
        var on = values.indexOf(val) !== -1;
        checks[i].classList.toggle("is-checked", on);
        if (on) labels.push(checks[i].getAttribute("data-dd-label") || val);
      }
      face.classList.remove("is-placeholder");
      face.textContent = labels.length <= 2 ? labels.join(", ") : labels.length + " selected";
    }

    function positionMenu(trigger, menu) {
      var rect = trigger.getBoundingClientRect();
      var gap = 6;
      var menuHeight = menu.offsetHeight || 220;
      var spaceBelow = window.innerHeight - rect.bottom - gap - 8;
      var spaceAbove = rect.top - gap - 8;
      var placeTop = spaceBelow < menuHeight && spaceAbove > spaceBelow;
          var width = Math.max(rect.width, menu.classList.contains("desk-cw-date-menu") ? 280 : rect.width);
      var left = Math.min(Math.max(8, rect.left), Math.max(8, window.innerWidth - width - 8));
      menu.style.left = left + "px";
      menu.style.width = width + "px";
      if (placeTop) {
        menu.style.top = "auto";
        menu.style.bottom = (window.innerHeight - rect.top + gap) + "px";
      } else {
        menu.style.bottom = "auto";
        menu.style.top = (rect.bottom + gap) + "px";
      }
    }

    function closeAllMenus(except) {
      var menus = document.querySelectorAll(".desk-cw-dd-menu");
      var roots = document.querySelectorAll(".desk-cw-dd");
      for (var r = 0; r < roots.length; r++) {
        if (except && roots[r].contains(except)) continue;
        roots[r].classList.remove("is-open");
      }
      for (var i = 0; i < menus.length; i++) {
        if (except && menus[i] === except) continue;
        menus[i].hidden = true;
      }
    }

    function pad2(n) {
      return (n < 10 ? "0" : "") + n;
    }

    var MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    var DOW = ["Su","Mo","Tu","We","Th","Fr","Sa"];

    function formatDateFace(value, kind) {
      var raw = String(value || "").trim();
      if (!raw) return kind === "datetime" ? "Select date & time" : "Select date";
      var datePart = raw;
      var hour = 0;
      var minute = 0;
      if (raw.indexOf("T") !== -1) {
        var bits = raw.split("T");
        datePart = bits[0];
        var tm = (bits[1] || "00:00").split(":");
        hour = Number(tm[0]) || 0;
        minute = Number(tm[1]) || 0;
      }
      var parts = datePart.split("-");
      var y = Number(parts[0]);
      var m = Number(parts[1]);
      var d = Number(parts[2]);
      if (!y || !m || !d) return raw;
      var label = pad2(d) + " " + (MONTHS[m - 1] || "").slice(0, 3) + " " + y;
      if (kind === "datetime") label += ", " + pad2(hour) + ":" + pad2(minute);
      return label;
    }

    function renderDateMenu(root) {
      var kind = root.getAttribute("data-dd-kind");
      var menu = root.querySelector("[data-dd-menu]");
      var hidden = root.querySelector("[data-ask-id]");
      var face = root.querySelector(".desk-cw-dd-face");
      if (!menu || !hidden || !face) return;
      var raw = String(hidden.value || "").trim();
      var now = new Date();
      var year = now.getFullYear();
      var month = now.getMonth();
      var hour = now.getHours();
      var minute = Math.floor(now.getMinutes() / 5) * 5;
      var selectedDay = null;
      if (raw) {
        var datePart = raw.split("T")[0];
        var p = datePart.split("-");
        year = Number(p[0]) || year;
        month = (Number(p[1]) || 1) - 1;
        selectedDay = Number(p[2]) || null;
        if (raw.indexOf("T") !== -1) {
          var t = (raw.split("T")[1] || "").split(":");
          hour = Number(t[0]) || 0;
          minute = Math.floor((Number(t[1]) || 0) / 5) * 5;
        }
      }

      function commit(day, h, m, closeAfter) {
        var datePart = year + "-" + pad2(month + 1) + "-" + pad2(day);
        hidden.value = kind === "datetime" ? datePart + "T" + pad2(h) + ":" + pad2(m) : datePart;
        face.classList.remove("is-placeholder");
        face.textContent = formatDateFace(hidden.value, kind);
        hidden.dispatchEvent(new Event("change", { bubbles: true }));
        if (closeAfter) { menu.hidden = true; root.classList.remove("is-open"); }
        else render();
      }

      function render() {
        var daysInMonth = new Date(year, month + 1, 0).getDate();
        var start = new Date(year, month, 1).getDay();
        var html = '<div class="desk-cw-cal-head">' +
          '<button type="button" class="desk-cw-cal-nav" data-cal-prev aria-label="Previous month">‹</button>' +
          '<p class="desk-cw-cal-title">' + MONTHS[month] + " " + year + "</p>" +
          '<button type="button" class="desk-cw-cal-nav" data-cal-next aria-label="Next month">›</button></div>';
        html += '<div class="desk-cw-cal-grid">';
        for (var d = 0; d < DOW.length; d++) html += '<span class="desk-cw-cal-dow">' + DOW[d] + "</span>";
        for (var e = 0; e < start; e++) html += "<span></span>";
        for (var day = 1; day <= daysInMonth; day++) {
          var sel = String(hidden.value || "").split("T")[0];
          var isActive = sel === year + "-" + pad2(month + 1) + "-" + pad2(day);
          var isToday = now.getFullYear() === year && now.getMonth() === month && now.getDate() === day;
          html += '<button type="button" class="desk-cw-cal-day' + (isActive ? " is-active" : "") + (isToday ? " is-today" : "") + '" data-cal-day="' + day + '">' + day + "</button>";
        }
        html += "</div>";
        if (kind === "datetime") {
          html += '<div class="desk-cw-time-row"><span class="desk-cw-time-label">Time</span><div class="desk-cw-time-controls">' +
            '<div class="desk-cw-time-group"><button type="button" class="desk-cw-time-btn" data-h-dec>−</button><span class="desk-cw-time-val">' + pad2(hour) + '</span><button type="button" class="desk-cw-time-btn" data-h-inc>+</button></div>' +
            "<span>:</span>" +
            '<div class="desk-cw-time-group"><button type="button" class="desk-cw-time-btn" data-m-dec>−</button><span class="desk-cw-time-val">' + pad2(minute) + '</span><button type="button" class="desk-cw-time-btn" data-m-inc>+</button></div>' +
            "</div></div>";
        }
        html += '<div class="desk-cw-cal-foot"><button type="button" class="desk-cw-cal-link" data-cal-clear>Clear</button><div>' +
          '<button type="button" class="desk-cw-cal-link" data-cal-today>Today</button>' +
          (kind === "datetime" ? '<button type="button" class="desk-cw-cal-done" data-cal-done>Done</button>' : "") +
          "</div></div>";
        menu.innerHTML = html;

        var prev = menu.querySelector("[data-cal-prev]");
        var next = menu.querySelector("[data-cal-next]");
        if (prev) prev.onclick = function () {
          if (month === 0) { month = 11; year -= 1; } else month -= 1;
          render();
          positionMenu(root.querySelector("[data-dd-trigger]"), menu);
        };
        if (next) next.onclick = function () {
          if (month === 11) { month = 0; year += 1; } else month += 1;
          render();
          positionMenu(root.querySelector("[data-dd-trigger]"), menu);
        };
        var dayBtns = menu.querySelectorAll("[data-cal-day]");
        for (var i = 0; i < dayBtns.length; i++) {
          dayBtns[i].onclick = function (event) {
            var dayNum = Number(event.currentTarget.getAttribute("data-cal-day"));
            selectedDay = dayNum;
            commit(dayNum, hour, minute, kind !== "datetime");
            positionMenu(root.querySelector("[data-dd-trigger]"), menu);
          };
        }
        var hDec = menu.querySelector("[data-h-dec]");
        var hInc = menu.querySelector("[data-h-inc]");
        var mDec = menu.querySelector("[data-m-dec]");
        var mInc = menu.querySelector("[data-m-inc]");
        function ensureDay() {
          if (selectedDay) return selectedDay;
          selectedDay = now.getDate();
          return selectedDay;
        }
        if (hDec) hDec.onclick = function () { hour = (hour + 23) % 24; commit(ensureDay(), hour, minute, false); positionMenu(root.querySelector("[data-dd-trigger]"), menu); };
        if (hInc) hInc.onclick = function () { hour = (hour + 1) % 24; commit(ensureDay(), hour, minute, false); positionMenu(root.querySelector("[data-dd-trigger]"), menu); };
        if (mDec) mDec.onclick = function () {
          minute -= 5;
          if (minute < 0) { minute = 55; hour = (hour + 23) % 24; }
          commit(ensureDay(), hour, minute, false);
          positionMenu(root.querySelector("[data-dd-trigger]"), menu);
        };
        if (mInc) mInc.onclick = function () {
          minute += 5;
          if (minute >= 60) { minute = 0; hour = (hour + 1) % 24; }
          commit(ensureDay(), hour, minute, false);
          positionMenu(root.querySelector("[data-dd-trigger]"), menu);
        };
        var clearBtn = menu.querySelector("[data-cal-clear]");
        if (clearBtn) clearBtn.onclick = function () {
          hidden.value = "";
          selectedDay = null;
          face.classList.add("is-placeholder");
          face.textContent = kind === "datetime" ? "Select date & time" : "Select date";
          hidden.dispatchEvent(new Event("change", { bubbles: true }));
          menu.hidden = true;
          root.classList.remove("is-open");
        };
        var todayBtn = menu.querySelector("[data-cal-today]");
        if (todayBtn) todayBtn.onclick = function () {
          year = now.getFullYear();
          month = now.getMonth();
          selectedDay = now.getDate();
          hour = kind === "datetime" ? now.getHours() : hour;
          minute = kind === "datetime" ? Math.floor(now.getMinutes() / 5) * 5 : minute;
          commit(selectedDay, hour, minute, kind !== "datetime");
          positionMenu(root.querySelector("[data-dd-trigger]"), menu);
        };
        var doneBtn = menu.querySelector("[data-cal-done]");
        if (doneBtn) doneBtn.onclick = function () { menu.hidden = true; root.classList.remove("is-open"); };
      }

      render();
    }

    function initCustomDropdowns() {
      var roots = document.querySelectorAll(".desk-cw-dd");
      for (var i = 0; i < roots.length; i++) {
        (function (root) {
          if (root.getAttribute("data-wired") === "1") return;
          root.setAttribute("data-wired", "1");
          var kind = root.getAttribute("data-dd-kind") || "select";
          var trigger = root.querySelector("[data-dd-trigger]");
          var menu = root.querySelector("[data-dd-menu]");
          var hidden = root.querySelector("[data-ask-id]");
          var face = root.querySelector(".desk-cw-dd-face");
          if (!trigger || !menu || !hidden || !face) return;

          trigger.addEventListener("click", function (event) {
            event.preventDefault();
            var willOpen = menu.hidden;
            closeAllMenus();
            if (!willOpen) return;
            if (kind === "date" || kind === "datetime") renderDateMenu(root);
            if (kind === "select") {
              var cur = String(hidden.value || "");
              var opts = menu.querySelectorAll("[data-dd-option]");
              for (var s = 0; s < opts.length; s++) {
                opts[s].classList.toggle("is-active", (opts[s].getAttribute("data-dd-option") || "") === cur && cur !== "");
              }
            }
            menu.hidden = false;
            root.classList.add("is-open");
            positionMenu(trigger, menu);
          });

          if (kind === "select") {
            var items = menu.querySelectorAll("[data-dd-option]");
            for (var j = 0; j < items.length; j++) {
              items[j].addEventListener("click", function (event) {
                var btn = event.currentTarget;
                var value = btn.getAttribute("data-dd-option") || "";
                var label = btn.getAttribute("data-dd-label") || "Select...";
                hidden.value = value;
                for (var k = 0; k < items.length; k++) items[k].classList.remove("is-active");
                if (value) btn.classList.add("is-active");
                face.textContent = label;
                face.classList.toggle("is-placeholder", !value);
                menu.hidden = true;
                root.classList.remove("is-open");
                hidden.dispatchEvent(new Event("change", { bubbles: true }));
              });
            }
          }

          if (kind === "multi") {
            var checks = menu.querySelectorAll("[data-dd-check]");
            for (var c = 0; c < checks.length; c++) {
              checks[c].addEventListener("click", function (event) {
                var btn = event.currentTarget;
                var value = btn.getAttribute("data-dd-check") || "";
                var current = String(hidden.value || "").split(",").map(function (v) { return v.trim(); }).filter(Boolean);
                var idx = current.indexOf(value);
                if (idx === -1) current.push(value);
                else current.splice(idx, 1);
                hidden.value = current.join(",");
                syncMultiFace(root);
                hidden.dispatchEvent(new Event("change", { bubbles: true }));
              });
            }
            syncMultiFace(root);
          }
        })(roots[i]);
      }

      if (!window.__deskCwDdDocBound) {
        window.__deskCwDdDocBound = true;
        document.addEventListener("mousedown", function (event) {
          var target = event.target;
          if (target && target.closest && target.closest(".desk-cw-dd")) return;
          closeAllMenus();
        });
        window.addEventListener("resize", function () { closeAllMenus(); });
        var ticketScroll = document.getElementById("desk-cw-ticket");
        if (ticketScroll) ticketScroll.addEventListener("scroll", function () { closeAllMenus(); });
      }
    }

    function initTagsInputs() {
      var roots = document.querySelectorAll("[data-tags-root]");
      for (var i = 0; i < roots.length; i++) {
        (function (root) {
          if (root.getAttribute("data-wired") === "1") return;
          root.setAttribute("data-wired", "1");
          var box = root.querySelector("[data-tags-box]");
          var chips = root.querySelector("[data-tags-chips]");
          var input = root.querySelector("[data-tags-input]");
          var hidden = root.querySelector("[data-ask-id]");
          var menu = root.querySelector("[data-tags-menu]");
          if (!box || !chips || !input || !hidden) return;

          function currentTags() {
            return String(hidden.value || "")
              .split(",")
              .map(function (part) { return part.trim(); })
              .filter(Boolean);
          }

          function setTags(next) {
            var unique = [];
            var seen = {};
            for (var t = 0; t < next.length; t++) {
              var tag = String(next[t] || "").trim();
              if (!tag) continue;
              var key = tag.toLowerCase();
              if (seen[key]) continue;
              seen[key] = true;
              unique.push(tag);
            }
            hidden.value = unique.join(",");
            renderChips();
            filterMenu();
            hidden.dispatchEvent(new Event("change", { bubbles: true }));
          }

          function renderChips() {
            var tags = currentTags();
            chips.innerHTML = "";
            for (var c = 0; c < tags.length; c++) {
              (function (tag) {
                var chip = document.createElement("span");
                chip.className = "desk-cw-tag-chip";
                var label = document.createElement("span");
                label.textContent = tag;
                var remove = document.createElement("button");
                remove.type = "button";
                remove.className = "desk-cw-tag-x";
                remove.setAttribute("aria-label", "Remove " + tag);
                remove.textContent = "×";
                remove.addEventListener("click", function (event) {
                  event.preventDefault();
                  event.stopPropagation();
                  setTags(currentTags().filter(function (item) { return item !== tag; }));
                });
                chip.appendChild(label);
                chip.appendChild(remove);
                chips.appendChild(chip);
              })(tags[c]);
            }
          }

          function positionMenu() {
            if (!menu || menu.hidden) return;
            var rect = box.getBoundingClientRect();
            menu.style.position = "fixed";
            menu.style.left = rect.left + "px";
            menu.style.width = Math.max(rect.width, 180) + "px";
            var spaceBelow = window.innerHeight - rect.bottom;
            if (spaceBelow < 180 && rect.top > spaceBelow) {
              menu.style.top = "auto";
              menu.style.bottom = (window.innerHeight - rect.top + 4) + "px";
            } else {
              menu.style.bottom = "auto";
              menu.style.top = (rect.bottom + 4) + "px";
            }
          }

          function filterMenu() {
            if (!menu) return;
            var query = String(input.value || "").trim().toLowerCase();
            var selected = {};
            var tags = currentTags();
            for (var s = 0; s < tags.length; s++) selected[tags[s].toLowerCase()] = true;
            var items = menu.querySelectorAll("[data-tags-option]");
            var visible = 0;
            for (var m = 0; m < items.length; m++) {
              var btn = items[m];
              var value = String(btn.getAttribute("data-tags-option") || "");
              var label = String(btn.getAttribute("data-tags-label") || value);
              var hide =
                selected[value.toLowerCase()] ||
                (query &&
                  label.toLowerCase().indexOf(query) === -1 &&
                  value.toLowerCase().indexOf(query) === -1);
              btn.classList.toggle("is-hidden", Boolean(hide));
              if (!hide) visible += 1;
            }
            menu.hidden = visible === 0;
            if (!menu.hidden) positionMenu();
          }

          function commitDraft() {
            var raw = String(input.value || "").replace(/,/g, "").trim();
            if (!raw) return;
            setTags(currentTags().concat([raw]));
            input.value = "";
            filterMenu();
          }

          box.addEventListener("click", function () {
            input.focus();
          });
          input.addEventListener("focus", function () {
            box.classList.add("is-focus");
            filterMenu();
          });
          input.addEventListener("blur", function () {
            box.classList.remove("is-focus");
            window.setTimeout(function () {
              if (document.activeElement === input) return;
              if (menu) menu.hidden = true;
              if (String(input.value || "").trim()) commitDraft();
            }, 120);
          });
          input.addEventListener("input", function () {
            filterMenu();
          });
          input.addEventListener("keydown", function (event) {
            if (event.key === "Enter" || event.key === ",") {
              event.preventDefault();
              commitDraft();
            } else if (event.key === "Backspace" && !String(input.value || "") && currentTags().length) {
              var tags = currentTags();
              setTags(tags.slice(0, tags.length - 1));
            } else if (event.key === "Escape") {
              if (menu) menu.hidden = true;
            }
          });

          if (menu) {
            var optionButtons = menu.querySelectorAll("[data-tags-option]");
            for (var o = 0; o < optionButtons.length; o++) {
              optionButtons[o].addEventListener("mousedown", function (event) {
                event.preventDefault();
                var value = event.currentTarget.getAttribute("data-tags-option") || "";
                if (!value) return;
                setTags(currentTags().concat([value]));
                input.value = "";
                input.focus();
                filterMenu();
              });
            }
          }

          renderChips();
        })(roots[i]);
      }

      if (!window.__deskCwTagsDocBound) {
        window.__deskCwTagsDocBound = true;
        document.addEventListener("mousedown", function (event) {
          var target = event.target;
          if (target && target.closest && target.closest("[data-tags-root]")) return;
          var menus = document.querySelectorAll("[data-tags-menu]");
          for (var m = 0; m < menus.length; m++) menus[m].hidden = true;
        });
        window.addEventListener("resize", function () {
          var openMenus = document.querySelectorAll("[data-tags-menu]:not([hidden])");
          for (var r = 0; r < openMenus.length; r++) {
            var root = openMenus[r].closest("[data-tags-root]");
            var box = root && root.querySelector("[data-tags-box]");
            if (!box) continue;
            var rect = box.getBoundingClientRect();
            openMenus[r].style.left = rect.left + "px";
            openMenus[r].style.width = Math.max(rect.width, 180) + "px";
          }
        });
      }
    }

    function initRadioGroups() {
      var roots = document.querySelectorAll("[data-radio-root]");
      for (var i = 0; i < roots.length; i++) {
        (function (root) {
          if (root.getAttribute("data-wired") === "1") return;
          root.setAttribute("data-wired", "1");
          var hidden = root.querySelector("[data-ask-id]");
          var radios = root.querySelectorAll("[data-radio-option]");
          for (var r = 0; r < radios.length; r++) {
            radios[r].addEventListener("change", function (event) {
              if (!hidden) return;
              hidden.value = event.currentTarget.checked
                ? String(event.currentTarget.value || "")
                : "";
              var errFor = root.closest("[data-error-for]");
              if (errFor) {
                var key = errFor.getAttribute("data-error-for");
                if (key) {
                  var msg = document.querySelector('[data-error-msg="' + key + '"]');
                  if (msg) {
                    msg.hidden = true;
                    msg.textContent = "";
                  }
                  errFor.classList.remove("invalid");
                }
              }
            });
          }
        })(roots[i]);
      }
    }

    window.__deskCwWireAskControls = function () {
      if (
        BAKED.needsSelect ||
        BAKED.needsMulti ||
        BAKED.needsDate ||
        document.querySelector("#desk-cw-ask-fields .desk-cw-dd")
      ) {
        initCustomDropdowns();
      }
      if (BAKED.needsTags || document.querySelector("#desk-cw-ask-fields [data-tags-root]")) {
        initTagsInputs();
      }
      if (BAKED.needsRadio || document.querySelector("#desk-cw-ask-fields [data-radio-root]")) {
        initRadioGroups();
      }
    };
    window.__deskCwWireAskControls();

    submitBtn.addEventListener("click", function () {
      clearAllErrors();
      var statusEl = document.getElementById("desk-cw-submit-status");
      if (statusEl) {
        statusEl.hidden = true;
        statusEl.style.display = "none";
        statusEl.textContent = "";
      }
      var hasError = false;

      var nameError = validateName(nameInput.value);
      if (nameError) { setFieldError("name", nameError); hasError = true; }
      var emailError = validateEmail(emailInput.value);
      if (emailError) { setFieldError("email", emailError); hasError = true; }

      var answers = {};
      for (var i = 0; i < askFields.length; i++) {
        var field = askFields[i];
        var value = readAskValue(field);
        var error = validateAsk(field, value);
        if (error) { setFieldError(field.id, error); hasError = true; }
        answers[field.id] = serializeAskAnswer(field, value);
      }
      for (var ei = 0; ei < embedFields.length; ei++) {
        var embedField = embedFields[ei];
        answers[embedField.id] = readEmbedFieldValue(embedField);
      }
      if (hasError) return;

      var submittedName = String(nameInput.value || "").trim();
      var submittedEmail = String(emailInput.value || "").trim();
      saveVisitorIdentity(submittedName, submittedEmail);

      var formDetails = [
        { label: "Name", value: submittedName },
        { label: "Email", value: submittedEmail },
      ];
      var formSubject = "";
      for (var di = 0; di < askFields.length; di++) {
        var askField = askFields[di];
        var rawAnswer = answers[askField.id];
        var askValue = Array.isArray(rawAnswer)
          ? rawAnswer.join(", ")
          : String(rawAnswer || "").trim();
        if (!askValue) continue;
        var askLabel = String(askField.label || askField.fieldRef || "Field").trim() || "Field";
        formDetails.push({ label: askLabel, value: askValue });
        var askKey = fieldKeyFromRef(askField.fieldRef).toLowerCase();
        if (!formSubject && askKey === "subject") formSubject = askValue;
      }
      for (var edi = 0; edi < embedFields.length; edi++) {
        var embedDetailField = embedFields[edi];
        var embedValue = String(answers[embedDetailField.id] || "").trim();
        if (!embedValue) continue;
        formDetails.push({
          label: String(embedDetailField.label || embedDetailField.fieldRef || "Field").trim() || "Field",
          value: embedValue,
        });
      }
      if (!formSubject) {
        for (var si = 0; si < formDetails.length; si++) {
          if (formDetails[si].label === "Name" || formDetails[si].label === "Email") continue;
          formSubject = formDetails[si].value;
          break;
        }
      }
      if (!formSubject) formSubject = "Support request";

      if (!config.apiBaseUrl || !config.chatWidgetId) {
        if (statusEl) {
          statusEl.style.display = "block";
          statusEl.hidden = false;
          statusEl.textContent = "Chatbot API is not configured.";
        }
        return;
      }

      submitBtn.disabled = true;
      submitBtn.textContent = "Submitting…";

      var ticketHeaders = {
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      if (config.orgId) ticketHeaders["X-Organisation-Id"] = config.orgId;
      if (config.departmentId) ticketHeaders.DepartmentId = config.departmentId;

      fetch(chatWidgetTicketsUrl(config), {
        method: "POST",
        headers: ticketHeaders,
        body: JSON.stringify({
          requesterName: submittedName,
          requesterEmail: submittedEmail,
          requesterPhone: null,
          answers: answers,
        }),
      }).then(function (res) {
        return res.json().then(function (body) {
          return { ok: res.ok, body: body };
        }).catch(function () {
          return { ok: res.ok, body: null };
        });
      }).then(function (result) {
        var success = result.ok && (!result.body || result.body.Success !== false && result.body.success !== false);
        if (!success) {
          var message = (result.body && (result.body.Message || result.body.message || result.body.Details || result.body.details)) || "Could not create ticket";
          if (statusEl) {
            statusEl.style.display = "block";
            statusEl.hidden = false;
            statusEl.textContent = String(message);
          }
          return;
        }
        for (var k = 0; k < askFields.length; k++) clearAskValue(askFields[k]);
        clearAllErrors();
        var payload = result.body && (result.body.Data != null ? result.body.Data : result.body.data != null ? result.body.data : result.body);
        var createdTicketNumber = "";
        if (payload && typeof payload === "object") {
          createdTicketNumber = String(
            payload.TicketNumber || payload.ticketNumber || "",
          ).trim();
          rememberCreatedTicket({
            ticketId: payload.TicketId || payload.ticketId || payload.Id || payload.id || ("local-" + Date.now()),
            ticketNumber: createdTicketNumber,
            subject: payload.Subject || payload.subject || formSubject,
            createdAt: payload.CreatedAt || payload.createdAt || new Date().toISOString(),
            details: formDetails,
          });
        } else {
          rememberCreatedTicket({
            ticketId: "local-" + Date.now(),
            subject: formSubject,
            createdAt: new Date().toISOString(),
            details: formDetails,
          });
        }
        setView("chat");
        removeRaiseButton();
        var thanksText = "Thanks — your request was submitted.";
        if (createdTicketNumber) {
          thanksText +=
            " Ticket " +
            (createdTicketNumber.charAt(0) === "#"
              ? createdTicketNumber
              : "#" + createdTicketNumber) +
            ".";
        }
        addBubble("bot", thanksText);
      }).catch(function () {
        if (statusEl) {
          statusEl.style.display = "block";
          statusEl.hidden = false;
          statusEl.textContent = "Could not create ticket. Please try again.";
        }
      }).then(function () {
        submitBtn.disabled = false;
        submitBtn.textContent = "Submit request";
      });
    });
  }

  function boot() {
    var base = readScriptConfig();
    if (!base.chatWidgetId) {
      console.error("[DeskChatWidget] data-widget-id is required on the script tag");
      return;
    }
    if (!base.apiBaseUrl) {
      console.error("[DeskChatWidget] api base URL is missing (rebuild shared runtime with NEXT_PUBLIC_BACKEND_URL)");
      return;
    }
    function start(cfg) { mount(cfg); }
    if (BAKED.shared) {
      fetchChatWidgetConfig(base).then(function (live) {
        var cfg = Object.assign({}, base);
        if (live) {
          if (live.title) cfg.title = live.title;
          if (live.welcome) cfg.welcome = live.welcome;
          if (live.tagline) cfg.tagline = live.tagline;
          if (live.color) cfg.color = live.color;
          if (live.launcherIcon) cfg.launcherIcon = live.launcherIcon;
          if (live.position === "bottom-left" || live.position === "bottom-right") {
            cfg.position = live.position;
          }
          cfg.captureFields = live.ticketDetails || [];
          cfg.askFields = (live.ticketDetails || []).filter(function (field) {
            return field && field.source === "ask_customer" && field.fieldRef;
          });
        }
        start(cfg);
      });
    } else {
      start(base);
    }
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();

  window.DeskChatWidget = {
    mount: mount,
    applyDeepLinkActions: applyDeepLinkActions,
    destroy: function () {
      var root = document.getElementById("desk-cw-root");
      var style = document.getElementById("desk-cw-style");
      if (root) root.remove();
      if (style) style.remove();
      window[GLOBAL_FLAG] = false;
    },
  };
})(window, document);
