export default ({ member, handleClose, handleChange }) => {
  return (
    <dialog id="modal-member" open>
      <article>
        <a
          href="#close"
          arial-label="Close"
          className="close"
          data-target="modal-member"
          onClick={handleClose}
        ></a>
        <hgroup>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <img style={{ width: '200px' }} src={`images/${member.slug}.svg`} alt={member.name} />
            <hgroup>
              <h1>{member.name}</h1>
              <p>{member.bio}</p>
            </hgroup>
          </div>
          <hgroup>
            <a
              href="#"
              role="button"
              class="contrast outline"
              onClick={() => handleChange(member.id - 1)}
              data-tooltip={member.name}
            >
              Previous
            </a>
            <a
              href="#"
              role="button"
              class="contrast outline"
              onClick={() => handleChange(member.id + 1)}
              data-tooltip={member.name}
            >
              Next
            </a>
          </hgroup>
        </hgroup>
      </article>
    </dialog>
  );
};
