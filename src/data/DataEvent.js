import EventData from '../data/events';

const DataEvent = {
    events: EventData,
    all: function() { return this.events},
    get: function(id) {
        const isEvent = e => e.id === id;
        return this.events.find(isEvent);
    }
};

export default DataEvent;