// Dies ist lediglich ein Vorschlag!

const state = {
    issues: [ new Issue(), new Issue(), {
        title: "Issue Title",
        description: "Beschreibung",
        typ: "feature oder bug",
        prio: 0 - 10,
        datum: new Date(),
        assignee: "Ich",
        status: "pending/solved"
    }]
};

class Issue {
    constructor(title, description, typ, prio, datum, assignee, status) {
        // TODO
    }
}