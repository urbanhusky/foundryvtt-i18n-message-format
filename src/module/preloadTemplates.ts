export async function preloadTemplates(): Promise<Handlebars.TemplateDelegate[]> {
  const templatePaths: string[] = [
    // Add paths to "modules/foundryvtt-i18n-message-format/templates"
  ];

  return loadTemplates(templatePaths);
}
