import { it, expect } from 'vitest';
import { Document } from '../piece-node-document';
import { Paragraph } from '../piece-node-paragraph';
import { Text } from '../piece-node-text';

it('Document findLeafNode', () => {
    const document = new Document();

    const paragraph = new Paragraph({});
    const text = new Text({ bufferIndex: 0, start: 0, length: 0, meta: null });

    paragraph.appendChild(text);
    document.appendChild(paragraph);

    let pos = document.findLeafNode(0);
    if (pos) {
        expect(pos.node).toBe(text);
        expect(pos.reminder).toBe(0);
    }

    pos = document.findLeafNode(1);
    if (pos) {
        expect(pos.node).toBe(text);
        expect(pos.reminder).toBe(0);
    }
});
