/**
 * Row - a flexible container that arranges children in a row or column.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Child elements to render inside the container.
 * @param {"row"|"column"} [props.direction="row"] - Flex direction.
 * @param {string} [props.gap="1rem"] - Gap between child elements.
 * @param {string} [props.justify="flex-start"] - Horizontal alignment (justify-content).
 * @param {string} [props.align="stretch"] - Vertical alignment (align-items).
 */
function Row({
  children,
  direction = 'row',
  gap = '1rem',
  justify = 'flex-start',
  align = 'stretch',
}) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: direction,
        gap: gap,
        justifyContent: justify,
        alignItems: align,
        width: '100%',
      }}
    >
      {children}
    </div>
  );
}

export default Row;
