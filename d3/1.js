let data = [
    {name: 't1', score: 199},
    {name: 't2', score: 109},
    {name: 't3', score: 189},
    {name: 't4', score: 299},
    {name: 't5', score: 249},
];
let demo1 = d3.select('#chart1')
            .data(data)

            .enter()
            .append('p')
            .text((d) => d.name)
            .style('height', '16px')
            .style('padding', '6px 0')
            .style('margin-top', '4px')
            .style('border-radius', '4px')
            .style('background-color', 'pink')
            .style('width', (d) => d.score + 'px')


let svg = d3.select('#chart2')
            .append('svg')
            .attr('height', '100')
            .attr('width', '100')

    svg.append('circle')
    .attr('cx', 40)
    .attr('cy', 40)
    .attr('r', 20)
    .attr('stroke', 'pink')
    .attr('stroke-width', 4)
    .attr('fill', '#fb3f60')

    svg.append('rect')
        .attr('width', '40')
        .attr('height', '40')
        .attr('fill', 'green')
        .attr('fill-opacity', 0.28)

    svg.append('line')
    .attr('x0', 0)
    .attr('y0', 0)
    .attr('x1', 40)
    .attr('y1', 40)
    .attr('stroke', 'blue')
    .attr('stroke-width', 4)