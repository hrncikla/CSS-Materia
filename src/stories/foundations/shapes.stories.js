export default {
  title: "Foundations/Shapes",
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: [
          '',
          'This module describes shape system using SCSS and CSS variables.',
          'It defines multiple **shape tokens** that allow for consistent border-radius values across components.',
          '',
          '### 🔹 Shape Tokens',
          'The available basic shape tokens include:',
          '- **None**: No rounding',
          '- **Extra-Small**: Slightly rounded corners',
          '- **Small**: Small rounding',
          '- **Medium**: Moderate rounding',
          '- **Large**: Prominent rounding',
          '- **Extra-Large**: Highly rounded corners',
          '- **Full**: Fully rounded corners',
          '',
          '```scss',
          '$md-sys-shape-corner-none: 0;',
          '$md-sys-shape-corner-extra-small: 0.25rem;',
          '$md-sys-shape-corner-small: 0.5rem;',
          '$md-sys-shape-corner-medium: 0.75rem;',
          '$md-sys-shape-corner-large: 1rem;',
          '$md-sys-shape-corner-extra-large: 1.75rem;',
          '$md-sys-shape-corner-full: 1000rem;',
          '```',
          '',
          '### 🔹 Shape Classes',
          'For easy implementation, predefined classes can be used:',
          '- **shape-{size}-all**: Applies rounding to all corners',
          '- **shape-{size}-top**: Applies rounding to the top corners',
          '- **shape-{size}-bottom**: Applies rounding to the bottom corners',
          '- **shape-{size}-start**: Applies rounding to the left corners',
          '- **shape-{size}-end**: Applies rounding to the right corners',
          '',
          'Use these classes to ensure consistency across your UI components.',
          '',
          '### 🔹 Example Usage',
          'You can use these classes in your HTML to apply different shape styles dynamically:',
          '',
          '```html',
          '<!-- Extra-Small rounded corners on all sides -->',
          '<div class="shape-extra-small-all">Extra-Small All</div>',
          '',
          '<!-- Medium rounded corners on top -->',
          '<div class="shape-medium-top">Medium Top</div>',
          '',
          '<!-- Large rounded corners only on the right (end) -->',
          '<div class="shape-large-end">Large End</div>',
          '```'
        ].join('\n'),
      },
    },
  },
};

export const Shapes = () => {
    const shapes = [
      { name: "none", value: "0" },
      { name: "extra-small", value: "0.25rem" },
      { name: "small", value: "0.5rem" },
      { name: "medium", value: "0.75rem" },
      { name: "large", value: "1rem" },
      { name: "extra-large", value: "1.75rem" },
      { name: "full", value: "1000rem" },
    ];
  
    const positions = ["all", "top", "bottom", "start", "end"];
  
    const container = document.createElement("div");
  
    shapes.forEach((shape) => {
      const section = document.createElement("div");
      section.innerHTML = `<h3>${shape.name.charAt(0).toUpperCase() + shape.name.slice(1)}</h3>`;
      section.style.marginBottom = "4em";
  
      const table = document.createElement("table");
      table.classList.add("shape-table");
      table.style.border = "1px solid #ddd";
      table.style.borderCollapse = "collapse";
      table.style.width = "100%";
      table.style.marginBottom = "10px";
  
      table.style.tableLayout = "fixed";
      table.style.maxWidth = "800px";
     
  
      const thead = document.createElement("thead");
      thead.innerHTML = `
        <tr style="background-color: #f9f9f9;">
          <th style="width: 50%; padding: 10px; border: 1px solid #ddd;">CSS Class</th>
          <th style="width: 20%; padding: 10px; border: 1px solid #ddd;">Default Value</th>
          <th style="width: 30%; padding: 10px; border: 1px solid #ddd;">Example</th>
        </tr>
      `;
      table.appendChild(thead);
  
      const tbody = document.createElement("tbody");
      positions.forEach((position) => {
        if (shape.name === "none" && position !== "all") return;
  
        const tr = document.createElement("tr");
        tr.style.border = "1px solid #ddd";
        tr.style.padding = "10px";
  
        const className = `shape-${shape.name}-${position}`;
        const exampleDiv = document.createElement("div");
        exampleDiv.classList.add("shape-example", className);
        exampleDiv.style.width = "50px";
        exampleDiv.style.height = "50px";
        exampleDiv.style.backgroundColor = "#6A5ACD";
        exampleDiv.style.display = "inline-block";
        exampleDiv.style.margin = "5px";
  
        tr.innerHTML = `
          <td style="padding: 10px; border: 1px solid #ddd;"><code>.${className}</code></td>
          <td style="padding: 10px; border: 1px solid #ddd;">${shape.value}</td>
        `;
  
        const exampleTd = document.createElement("td");
        exampleTd.style.padding = "10px";
        exampleTd.style.border = "1px solid #ddd";
        exampleTd.appendChild(exampleDiv);
        tr.appendChild(exampleTd);
  
        tbody.appendChild(tr);
      });
      table.appendChild(tbody);
      section.appendChild(table);
      container.appendChild(section);
    });
  
    return container;
  };