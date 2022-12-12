#!/usr/bin/env python

import toml

from jinja2 import Template, Environment, FileSystemLoader, select_autoescape

env = Environment(
    loader=FileSystemLoader(searchpath="./templates"),
)

def create_projects():
    project_temp = env.get_template("projects.html")
    
    projects = []
    print("* Reading projects from projects.toml")
    with open("projects.toml", "r") as f:
        projects_toml = toml.load(f)
        for name, data in projects_toml.items():
            project = {'title': name}
            projects.append({**project, **data})

    with open("projects.html", "w+") as f:
        txt = project_temp.render(projects=projects)
        print("* Writing projects to projects.html")
        f.write(txt)
        
if __name__ == "__main__":
    create_projects()
            
