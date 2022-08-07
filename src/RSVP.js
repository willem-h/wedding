function RSVP({
  rsvp,
  handleChange,
  handleAddMember,
  handleRemoveMember,
  handleNameChange,
  handleSubmit
}) {
  return (
    <div className="space-y-6">
      <h1 className="font-serif text-4xl">rsvp</h1>
      <form
        className="flex flex-col space-y-6 w-3/5 mx-auto"
        onSubmit={handleSubmit}
      >

        <label className="flex flex-col space-y-2">
          <span>{ rsvp.names.length === 1 ? "Name" : "Names" }</span>
          {
            rsvp.names.map((name, index) => {
              return (
                <input
                  type="text"
                  key={index}
                  name={`name_${index}`}
                  value={name}
                  placeholder={`Guest ${index+1}`}
                  onChange={handleNameChange(index)}
                  className="form-input"
                  required
                />
              )
            })
          }
          {
            rsvp.names[0] !== "" &&
            <input
              type="button"
              value="Add group member"
              onClick={handleAddMember}
              className="form-input cursor-pointer"
            />
          }
          {
            rsvp.names.length > 1 &&
            <input
              type="button"
              value="Remove group member"
              onClick={handleRemoveMember}
              className="form-input cursor-pointer"
              disabled={rsvp.names.length === 1}
            />
          }
        </label>

        <label className="flex flex-col space-y-2">
          <span>Phone Number</span>
          <input
            type="tel"
            name="phone"
            value={rsvp.phone}
            onChange={handleChange}
            className="form-input"
          />
        </label>

        <label className="flex flex-col space-y-2">
          <span>Email Address</span>
          <input
            type="email"
            name="email"
            value={rsvp.email}
            onChange={handleChange}
            className="form-input" 
          />
        </label>

        <label className="flex flex-col space-y-2">
          <span>Will you be attending?</span>
          <select
            name="attending"
            value={rsvp.attending}
            onChange={handleChange}
            className="form-select"
            required
          >
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
        </label>

        {
          rsvp.attending === 'false' &&
          <label className="flex flex-col space-y-2">
            <span>Would you like a link to the live stream?</span>
            <select
              name="livestream"
              value={rsvp.livestream}
              onChange={handleChange}
              className="form-select"
            >
              <option value={true}>Yes</option>
              <option value={false}>No</option>
            </select>
          </label>
        }

        {
          rsvp.attending === 'true' &&
          <label className="flex flex-col space-y-2">
            <span>Dietary Requirements</span>
            <textarea
              name="dietary"
              value={rsvp.dietary}
              onChange={handleChange}
              className="form-textarea" 
            />
          </label>
        }

        <label className="flex flex-col space-y-2">
          <span>Anything else we need to know?</span>
          <textarea
            name="other"
            value={rsvp.other}
            onChange={handleChange}
            className="form-textarea" 
          />
        </label>

        <input
          type="submit"
          value="Submit RSVP"
          className="form-input cursor-pointer"
        />

      </form>
    </div>
  )
}

export default RSVP
